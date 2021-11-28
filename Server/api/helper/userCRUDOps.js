const userModel = require('../models/UserSchema');
const jwt = require('jsonwebtoken');

const userOperation = {
    AddUser(userObject, response) {
        userModel.create(userObject, (err, doc) => {
            if (err) {
                console.log("Error is ", err);
                response.json({ Status: "F" });
            } else {
                response.json({ Status: "S", record: doc });
            }
        })
    }
}
module.exports = userOperation;