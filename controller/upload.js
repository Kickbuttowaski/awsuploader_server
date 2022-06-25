const { ListObjectsCommand, GetObjectCommand ,PutObjectCommand } = require("@aws-sdk/client-s3");
const { streamToString,getFilename } = require("../helper");
const { executeCommand } = require("../helper/awsfnc");
const handleError = (res, err) => {
  res.status(500).json({ status: false, data: "", error: err.message });
};

module.exports.testAPI = async (req, res) => {
  res.status(200).json({ message: "Upload test API", data });
};

module.exports.listBucketObjects = async (req, res) => {
  try {
    const command = new ListObjectsCommand({ Bucket: "krayo-privatebkt" });
    let data = await executeCommand(command);
    res.status(200).json({ message: "from upload", data: data.Contents || [] });
  } catch (err) {
    console.log(
      "🚀 ~ file: upload.js ~ line 14 ~ module.exports.listBucketObjects=async ~ err",
      err
    );
    handleError(res, err);
  }
};

module.exports.getObject = async (req, res) => {
  try {
    const command = new GetObjectCommand({
      Bucket: "krayo-privatebkt",
      Key: req.query.filename,
    });
    let data = await executeCommand(command);
    res.attachment("test.pdf"); // set file name
    res.type(data.ContentType); // set file type
    const bodyContents = await streamToString(data.Body);
    res.send(bodyContents);
  } catch (err) {
    console.log(
      "🚀 ~ file: upload.js ~ line 40 ~ module.exports.getObject=async ~ err",
      err
    );
    handleError(res, err);
  }
};
module.exports.uploadFile = async (req, res) => {
  try {
    if(req.files){
        let fileName = getFilename(req.files.file.name)
        const command = new PutObjectCommand({
            Bucket:"krayo-privatebkt",
            Body:req.files.file.data,
            ContentType: req.files.file.mimetype,
            Key:fileName
          });
          let data = await executeCommand(command);
          res.status(200).json({status:true,data:fileName,message:"File uploaded succefully"})
    }else{
        res.status(400).json({status:true,data:"",message:"File upload faield"})
    }
    
  } catch (err) {
    console.log(
      "🚀 ~ file: upload.js ~ line 40 ~ module.exports.uploadFile=async ~ err",
      err
    );
    handleError(res, err);
  }
};
