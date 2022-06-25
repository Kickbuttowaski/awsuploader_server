const express = require("express")
const router = express.Router();
const Controller = require("../controller/upload")

router.post("/",Controller.uploadFile)
router.get("/test",Controller.testAPI)
router.get("/list",Controller.listBucketObjects)
router.get("/get",Controller.getObject)
module.exports = router