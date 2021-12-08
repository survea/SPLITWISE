const mongoose = require('../app.js');

const Schema = mongoose.Schema;

// User model to save the details
const UserSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String},
    friends: { type: Array },
    expensis: { type: Array },
    confirmed: { type: Boolean, default: false }
})

const userModel = mongoose.model('user', UserSchema);

// export model
module.exports = userModel;