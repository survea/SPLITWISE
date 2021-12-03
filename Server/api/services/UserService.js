const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const userOperation = {
    // function to resgister new user
    AddUser(userObject, response) {
        userModel.create(userObject, (err, doc) => {
            if (err) {
                console.log("Error is ", err);
                response.json({ Status: "F" });
            } else {
                response.json({ Status: "S", record: doc });
            }
        })
    },
    // function to login new user
    login(userObject, response) {
        userModel.findOne(userObject, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                if (doc) {
                    jwt.sign({ doc }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                        response.json({ Status: "S", msg: "welcome bro " + doc.username, token: token });
                    });
                } else {
                    response.json({ Status: "F", msg: "Invalid username or password" });
                }
            }
        })
    },

}
module.exports = userOperation;