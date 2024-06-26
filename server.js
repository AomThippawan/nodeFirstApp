const express = require("express");
const app=express();
const users = require('./db.json');

const port = process.env.PORT || 3000; //กำหนด port


app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)));
    
});


app.get("/aom", (req, res) => { 
    res.send("My name is thippawan 652021052");
});

app.listen(port, () => {
   //console.log("Starting node.js at http://127.0.0.1:" + port +"/aom");
    console.log("Starting node.js at http://127.0.0.1:" + port +"/api/users");
    console.log("Starting node.js at http://127.0.0.1:" + port +"/api/users/:id");
});