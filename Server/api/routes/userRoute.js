const app = require('express').Router();
const jwt = require('jsonwebtoken');
const userOperation = require('../helper/userCRUDOps');
app.post("/login",(req,resultData)=>{
    // console.log("header is ",req.header);
    console.log(req.body);
    userOperation.login(req.body,resultData);
})

app.post("/signup",(req,resultData)=>{
    
    console.log(req.body);
    userOperation.AddUser(req.body,resultData);
})

app.post("/getData",async(req,resultData)=>{
    var result =  await userOperation.Find(req.body.username);
    if(result){
        resultData.json({user: result});
    }else{
        console.log("not possible");
    }
})

app.get("/getUser",(req,resultData)=>{
    const bearerHeader = req.headers['authorization'];
    // bearer Header or token = "bearer <token>" 
    if(typeof bearerHeader !== 'undefined'){
      // split at the space so that we get two array one containing bearer and another token

      const bearer = bearerHeader.split(' ');
    //   get token from array
    const bearerToken = bearer[1];
    //  console.log('this is ',bearerToken);
    jwt.verify(bearerToken,'secretkey',(err,authData)=>{
      if(err){
          console.log(err);
          resultData.sendStatus(403);
      }else{
          resultData.json({userdata: authData});
      }
    });

    }else{
        resultData.sendStatus(403);
    }
   
})

app.post('/AddFriend',(req,resultData)=>{
    console.log("Hello data ",req.body);
    userOperation.AddFriend(req.body,resultData);
})

app.post('/getData',(req,resultData)=>{
    console.log("hello",req.body);
    // userOperation.GetData(resultData);
})

module.exports =  app;