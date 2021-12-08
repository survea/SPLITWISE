const app = require('express').Router();
const jwt = require('jsonwebtoken');
const userOperation = require('../services/UserService');

const userController = {
    // get user details
    getUser(request, response){
        const auth = request.headers['authorization'];
        if(typeof auth !== 'undefined'){
        const authSplit = auth.split(' ');
        const authToken = authSplit[1];
        jwt.verify(authToken,'secretkey',(err,authData)=>{
            if(err){
                console.log(err);
                response.sendStatus(403);
            }else{
                response.json({userdata: authData});
            }
            });
        }else{
            response.sendStatus(403);
        }
    },
    // login the user
    login(request, response){
        userOperation.login(request.body,response);
    },
    // register new user
    signIn(request, response){
        userOperation.AddUser(request.body,response);
    },
    // update the user details
    updateUser(request, response){
        const id = request.params.id;
        const respBody = {...request.body, id};
        userOperation.updateUser(respBody,response);
    }
}

module.exports =  userController;