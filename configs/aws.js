const {S3Client} = require("@aws-sdk/client-s3")
let S3_CREDS = {
    accessKeyId:process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey:process.env.AWS_S3_SECRET_KEY
}

const AWS_S3 =  new S3Client({credentials:S3_CREDS,region: 'us-east-2'})
module.exports = {
    AWS_S3:AWS_S3,
}