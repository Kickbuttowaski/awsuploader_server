const {ListObjectsCommand,GetObjectCommand} = require("@aws-sdk/client-s3")
const {streamToString} = require("../helper")
const {executeCommand} = require("../helper/awsfnc")
const handleError = (res,err)=>{ res.status(500).json({status:false,data:"",error:err.message})};

module.exports.testAPI = async(req,res)=>{
    res.status(200).json({message:"Upload test API",data})
}

module.exports.listBucketObjects = async(req,res)=>{
    try{
        const command = new ListObjectsCommand({Bucket:"krayo-privatebkt"})
        let data = await executeCommand(command)
        res.status(200).json({message:"from upload",data:data.Contents || []})
       
    }catch(err){
    console.log("🚀 ~ file: upload.js ~ line 14 ~ module.exports.listBucketObjects=async ~ err", err)
    handleError(res,err)
    }
}

module.exports.getObject = async(req,res)=>{
    try{
        const command = new GetObjectCommand({Bucket:"krayo-privatebkt",Key:"a.txt"})
        let data = await executeCommand(command)
        res.attachment('test.pdf'); // set file name
        res.type(data.ContentType); // set file type
        const bodyContents = await streamToString(data.Body);
        res.send(bodyContents);     
    }catch(err){
    console.log("🚀 ~ file: upload.js ~ line 40 ~ module.exports.getObject=async ~ err", err)
    handleError(res,err)
    }
}