const express = require("express")
const router = express.Router();
const Controller = require("../controller/upload")

router.get("/test",Controller.testAPI)

module.exports = router