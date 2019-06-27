const mongoose = require("mongoose");

mongoose.connect("mongodb://synergy:krsna123@ds117316.mlab.com:17316/db_name", { useNewUrlParser: true })
    .then(resp => {
        console.log("Connected!")
    })
    .catch(err => console.log(err));