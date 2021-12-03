const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const dashOperation = {
    // function to add new friend
    async AddFriend(userObject, response) {
        var check = await this.Find(userObject.username);
        console.log(check);
        if (check) {
            userModel.findOneAndUpdate({ username: userObject.defaultUser },
                { "$push": { "friends": userObject.username, "expensis": { "name": userObject.username, "data": {} } } }, { "new": true },
                (err, doc) => {
                    if (err) {
                        console.log(err);
                    } else {
                        response.json({ Status: "S", msg: "Added succesfully", doc: doc });
                    }
                }
            )
        } else {
            console.log("status Fail")
            response.json({ Status: "F", msg: "your friend is not registerd yet" });
        }
    },
    // function to find a user
    Find(username) {
        return userModel.findOne({ username }, function (err, doc) {
            if (err) {
                console.log(err);
                //   return false;
            } else {
                if (doc) {
                    console.log(doc);
                    // return true;
                } else {
                    console.log("not Found");
                    //  return false;
                }
            }
        })

    },
    // function to add a expense
    AddExpense(userObject,response){
        userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{'$set' : {"expensis.$.data.desc": userObject.inp.description,"expensis.$.data.date": userObject.inp.date},"$inc":{"expensis.$.data.ammount": userObject.inp.amount}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }else{
               console.log(doc);
                response.json({Status: "S",msg: "Added succesfully",doc: doc});
            }
        })
       }
}
module.exports = dashOperation;