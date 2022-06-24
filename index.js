const express = require("express");
const app = express();
const PORT = process.env.port || 4000;

app.get("/",(req,res)=>{
    res.status(200).json({message:"Reached!!!!!"})
})

app.listen(PORT,()=>{
    console.log("SERVER UP AND RUNNING ON PORT: ",PORT)
})