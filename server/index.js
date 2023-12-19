// password:ENRa80fj2Vb63Cyn 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require('./models/User');

const DB = 'mongodb+srv://harshlodhi0809:ENRa80fj2Vb63Cyn@cluster0.7udkifx.mongodb.net/?retryWrites=true&w=majority'; 

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(`no connection ${err}`);
})
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    const { name, email, mobile, age, timeSlot, month } = req.body;
    console.log(name, timeSlot)
    try {
        await User.create({ name, email, mobile, age, timeSlot, month });
        console.log("Data inserted successfully");
        res.status(200).json({ message: "Data inserted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})