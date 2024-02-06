const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog-user:blogpassword1@cluster0.gfbgpxl.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try {
      const userDoc = await User.create({username,password})
      res.json({requestData: {username, password}});
    }catch(e) {
        res.status(400).json(e);
    }
})


app.listen(PORT);

