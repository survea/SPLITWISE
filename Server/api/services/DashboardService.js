const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const dashOperation = {
    // Function to add date 
    getCurrentDate(){
        let separator ='-'
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    },
    // function to add new friend
    async AddFriend(userObject, response) {
        var check = await this.Find(userObject.username);
        console.log(check);
        if (check) {
            userModel.findOneAndUpdate({ username: userObject.defaultUser },
                { "$push": { "friends": userObject.username, "expensis": { "name": userObject.username, "total": 0, "data": [], "settlementData": [] } } }, { "new": true },
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
     // function to add new friend on other side
    async AddFriendOtherSide(userObject, response) {
        var check = await this.Find(userObject.defaultUser);
        console.log(check);
        if (check) {
            userModel.findOneAndUpdate({ username: userObject.username },
                { "$push": { "friends": userObject.defaultUser, "expensis": { "name": userObject.defaultUser, "total": 0, "data": [], "settlementData": [] } } }, { "new": true },
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
        userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{"$push" : {"expensis.$.data" : {"desc": userObject.inp.description,"date": userObject.inp.date, "ammount": userObject.inp.amount}},"$inc":{"expensis.$.total": userObject.inp.amount}},{"new": true},
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
    // function to add expense on other side
    AddExpenseOtherSide(userObject,response){
        userModel.findOneAndUpdate({username: userObject.user,"expensis.name":userObject.username},{"$push" : {"expensis.$.data" : {"desc": userObject.inp.description,"date": userObject.inp.date,"ammount": parseInt(`-${userObject.inp.amount}`)}},"$inc":{"expensis.$.total": parseInt(`-${userObject.inp.amount}`)}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
        })
    },
    // Function to settle up on one side
    settleUp(userObject,response){
        console.log(userObject.val);
        userModel.findOneAndUpdate({username: userObject.username,"expensis.name":userObject.user},{"$push" : {"expensis.$.settlementData" : {"desc": "settlement", "date": this.getCurrentDate(),"ammount": userObject.val}}, "$inc":{"expensis.$.total": userObject.val}},{"new": true},
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
    // function to settle on other side
    settleUpOtherSide(userObject,response){
        userModel.findOneAndUpdate({username: userObject.user,"expensis.name":userObject.username},{"$push" : {"expensis.$.settlementData" : {"desc": "settlement", "date": this.getCurrentDate(),"ammount": userObject.val}}, "$inc":{"expensis.$.total": -userObject.val}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
        })
    },
    // function to delete the expenses
    deleteExpense(reqBody,response){
        userModel.findOneAndUpdate({username: reqBody.loggedInUser.username,"expensis.name":reqBody.selectedUser},{"$pull" : {"expensis.$.data" : {"desc": reqBody.expense.desc,"date": reqBody.expense.date,"ammount": parseInt(`${reqBody.expense.ammount}`)}}, "$inc":{"expensis.$.total": parseInt(`-${reqBody.expense.ammount}`)}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }else{
                console.log(doc);
                this.deleteExpenseOtherSide(reqBody,response);
                response.json({Status: "S",msg: "deleted expense succesfully",doc: doc});
            }
        })
    },
    // function to delete the expense on other side
    deleteExpenseOtherSide(reqBody,response){
        userModel.findOneAndUpdate({username: reqBody.selectedUser,"expensis.name":reqBody.loggedInUser.username},{"$pull" : {"expensis.$.data" : {"desc": reqBody.expense.desc,"date": reqBody.expense.date,"ammount": parseInt(`-${reqBody.expense.ammount}`)}}, "$inc":{"expensis.$.total": parseInt(`${reqBody.expense.ammount}`)}},{"new": true},
        (err,doc)=>{
            if(err){
                console.log(err);
            }
        })
    }
}
module.exports = dashOperation;