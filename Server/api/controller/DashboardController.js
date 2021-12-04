const app = require('express').Router();
const jwt = require('jsonwebtoken');
const dashOperation = require('../services/DashboardService');

const dashController = {
    // get data on dashboard landing
    getData(request, response){
        var result = dashOperation.Find(request.body.username);
        if(result){
            response.json({user: result});
        }else{
            console.log("not possible");
        }
    },
    // add frined
    addFriend(request, response){
        dashOperation.AddFriend(request.body,response);
        dashOperation.AddFriendOtherSide(request.body,response);
    },
    // add expenses
    addExpense(request, response){
        dashOperation.AddExpense(request.body,response);
    }
}

module.exports =  dashController;