const express = require("express")
const router = express.Router()
const controllers = require("../controllers")

router.get("/signin", controllers.signin)

module.exports = router
