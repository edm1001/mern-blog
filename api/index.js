require("dotenv").config();

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const User = require("./models/User");
const Post = require("./models/Post");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

if (!MONGO_URL) {
  console.log("MONGO_URL is not defined");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

// mongoose.set("strictQuery", true);
const allowedOrigins = [
  "http://localhost:3000",
  "https://headlinehub-6a4bc8139a2f.herokuapp.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
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
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token ).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});
// FIXME: fix route to /profile, cannot get
app.get("/profile", (req, res) => {
  console.log("Raw cookie header:", req.headers.cookie);
  console.log("Parsed cookies:", req.cookies);

  const token = req.cookies?.token;
  console.log("Token received:", token);
  if (!token) {
    console.log("No token provided");
    return res.status(401).json("Unauthorized");
  }

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(403).json("Invalid token");
    }
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// api req for createPost.jsx to create post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;

  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const { title, summary, content } = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: info.id,
      });
      res.json(postDoc);
    });
  } else {
    res.status(401).json("unauthorized");
  }
});

// update post
app.put("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const token = req.cookies?.token;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author!");
    }
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    postDoc.cover = newPath ? newPath : postDoc.cover;

    await postDoc.save();
    res.json(postDoc);
  });
});

// get /posts
app.get("/post", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20);
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// get posts/id
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

// delete post
app.delete("/post/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.cookies?.token;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author!");
    }
    await Post.findByIdAndDelete(id);
    res.json("deleted sucessfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
