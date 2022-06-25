const {AWS_S3} = require("../configs/aws")
const triggerRequestS3=async(command)=>{
    return AWS_S3.send(command)
}

module.exports = {executeCommand:triggerRequestS3}