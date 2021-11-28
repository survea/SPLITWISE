const app = require('express').Router();
const jwt = require('jsonwebtoken');
const userOperation = require('../helper/userCRUDOps');
app.post("/login",(req,res)=>{
    // console.log("header is ",req.header);
    console.log(req.body);
    userOperation.login(req.body,res);
})

app.post("/signup",(req,res)=>{
    
    console.log(req.body);
    userOperation.AddUser(req.body,res);
})

module.exports =  app;