const express = require("express");
require("./src/db/mongoose");
const User = require("./src/model/user");

const app = express();
const port = process.env.PORT  || 3030;

app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/users", (req, res) => {
    User.find({}).then(resp => {
        return res.send(resp);
    }).catch(err => res.send(err));
})
app.post("/users", (req, res) => {
    const user = new User(req.body);
    user.save().then(resp => {
        return res.send(resp)
    }).catch(err => {
        return res.send(err)
    });

} )

app.listen(port, () => {console.log(port)});