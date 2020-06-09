
const express = require('express');

const app = new express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const materialRoute = require("./routes/material");

mongoose.connect('mongodb+srv://Malcomex:anaba_ex12@cluster0-qda0f.mongodb.net/goodhealthdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/",materialRoute)


const port = 3000;
app.listen(port, () => {
    console.log('App listening on port 3000')
});