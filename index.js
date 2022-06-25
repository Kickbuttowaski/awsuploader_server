const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.port || 4000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "PUSH, POST, GET");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.get("/",(req,res)=>{
    res.status(200).json({message:"Reached!!!!!"})
})
//router imports
const uploadRouter = require("./routes/upload")
app.use("/api/upload",uploadRouter)
app.listen(PORT,()=>{
    console.log("SERVER UP AND RUNNING ON PORT: ",PORT)
})