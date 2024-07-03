const express = require("express");
const app = express();
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/users', (req, res) => {
    users.push(req.body)
    let json = req.body
    res.send("Add new user " +json.username+ " completed.")
});

app.put('/api/users/:id', (req, res) => {
    const updateIndex = users.findIndex(user => user.id === Number(req.params.id))
    res.send("Update user id:" + users[updateIndex].id + "completed.")
});

app.delete('/users/:id', (req, res) => {
    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id)) 
    res.send("Delete user " + users[deletedIndex].username + " completed.")
 });
app.listen(port, () => {
    //console.log("Starting node.js at http://127.0.0.1:" + port +"/aom");
    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
    //console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users/:id");
});
