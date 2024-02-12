const express = require("express");
const fs = require("fs");
const cors = require("cors");
const User = require("./models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const secret = "ajcayub2kjdwa8dnawksnxiuwaendaywdhawidao2dho";
const cookieParser = require("cookie-parser");
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const app = express();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://blog-user:blogpassword1@cluster0.gfbgpxl.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});
// api req for createpost.jsx
app.post("/post", uploadMiddleware.single('file'), (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length-1];
  const newPath = path+'.'+ext
  fs.renameSync(path, newPath);
  
  res.json({ext})   
})


app.listen(4000);
