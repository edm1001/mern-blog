const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {username, password} = req.body;
    res.json({requestData: {username, password}});
    res.json('testok3')
})

mongoose.connect('mongodb+srv://blog-user:blogpassword1@cluster0.gfbgpxl.mongodb.net/?retryWrites=true&w=majority')



app.listen(PORT);

