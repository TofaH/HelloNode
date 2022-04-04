const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://tofa:tofa2576@cluster0.r2j7h.mongodb.net')

app.listen(3001, ()=>{
    console.log('running!!');
})