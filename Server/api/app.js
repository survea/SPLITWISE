const url = require('../api/utils/environment');
const mongoose = require('mongoose');
mongoose.connect(url.mongo);

mongoose.connection.on('open',()=>{
    console.log("connected to database");
})

module.exports = mongoose;