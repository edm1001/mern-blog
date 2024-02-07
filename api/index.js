const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

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
// 1:07

app.listen(PORT);

