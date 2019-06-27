const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        default : "test@test.com"
    }
}) 

module.exports = User;