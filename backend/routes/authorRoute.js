const express = require("express")
const route = express.Router()
const controller = require("../controller/authorController")
route.post("/insert", controller.insertData)
route.get("/addbook", controller.addBookData)
route.post("/addnew", controller.addNewData)
route.get("/display", controller.displayAll)

module.exports = route