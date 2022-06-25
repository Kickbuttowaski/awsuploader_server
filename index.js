const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.port || 4000;

app.get("/",(req,res)=>{
    res.status(200).json({message:"Reached!!!!!"})
})
//router imports
const uploadRouter = require("./routes/upload")
app.use("/api/upload",uploadRouter)
app.listen(PORT,()=>{
    console.log("SERVER UP AND RUNNING ON PORT: ",PORT)
})