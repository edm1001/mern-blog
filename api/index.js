const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const secret = 'ajcayub2kjdwa8dnawksnxiuwaendaywdhawidao2dho';
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://blog-user:blogpassword1@cluster0.gfbgpxl.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try {
      const userDoc = await User.create({username,password:bcrypt.hashSync(password, salt),
    })
      res.json(userDoc)
    }catch(e) {
        res.status(400).json(e);
    }
})

app.post('/login', async (req,res) => {
  const {username, password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    jwt.sign({username, id:userDoc.id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('ok');
    })
  }else {
    res.status(400).json('wrong credentials')
  }
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if(err) throw err;
    res.json(info);
  })
  res.json(req.cookies);
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
});


app.listen(PORT);

