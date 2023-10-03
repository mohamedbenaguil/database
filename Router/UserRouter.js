const mongoose = require("mongoose");
const {getUSER,postUSER, deleteUSER, register, loginUser} = require("../Controller/UserControl");
const express=require("express");
const { regiterValidation, validation, loginValidation } = require("../Middleware/Validation");
const { isAuth } = require("../Middleware/IsAuth");
const userRout=express.Router();

userRout.get("/get",getUSER);
userRout.delete("/delete/:id", deleteUSER )
userRout.post('/register',regiterValidation ,validation, register)
userRout.post('/login',loginValidation ,validation , loginUser)
userRout.get('/getuser', isAuth, (req, res)=>{
    res.send({user: req.user})


})
module.exports=userRout 