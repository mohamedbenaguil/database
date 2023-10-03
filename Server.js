const express = require('express');
const userRout = require('./Router/UserRouter');
const connectDatabase = require('./Configuration/Config');
const port= 4000;
const app= express()
app.use(express.json())
connectDatabase()
app.use("/user",userRout) 
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})


