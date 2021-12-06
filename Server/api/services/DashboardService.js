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
                (err,doc)=>{
                    if(err){
                        console.log(err);
                    }else{
                        this.AddFriendOtherSide(userObject, response);
                        response.json({Status: "S",msg: "Added succesfully",doc: doc});
                    }
                }
            )
        } else {
            console.log("status Fail")
            response.json({ Status: "F", msg: "your friend is not registerd yet" });
        }
    },
    async AddFriendOtherSide(userObject, response) {
        var check = await this.Find(userObject.defaultUser);
        console.log(check);
        if (check) {
            userModel.findOneAndUpdate({ username: userObject.username },
                { "$push": { "friends": userObject.defaultUser, "expensis": { "name": userObject.defaultUser, "data": {} } } }, { "new": true },
                (err,doc)=>{
                    if(err){
                        console.log(err);
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
               this.AddExpenseOtherSide(userObject,response);
                response.json({Status: "S",msg: "Added succesfully",doc: doc});
            }
        })
    },
    AddExpenseOtherSide(userObject,response){
        userModel.findOneAndUpdate({username: userObject.user,"expensis.name":userObject.username},{'$set' : {"expensis.$.data.desc": userObject.inp.description,"expensis.$.data.date": userObject.inp.date},"$inc":{"expensis.$.data.ammount": parseInt(`-${userObject.inp.amount}`)}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
        })
    },
    settleUp(userObject,response){
        userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{"$inc":{"expensis.$.data.ammount": userObject.val}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }else{
                console.log(doc);
                this.settleUpOtherSide(userObject,response);
                response.json({Status: "S",msg: "Settled up succesfully",doc: doc});
            }
        })
    },
    settleUpOtherSide(userObject,response){
        userModel.findOneAndUpdate({username: userObject.user,"expensis.name":userObject.username},{"$inc":{"expensis.$.data.ammount": userObject.val}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
        })
    }
}
module.exports = dashOperation;