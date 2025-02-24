const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./routes/authorRoute")
const Port = 8000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect("mongodb://127.0.0.1:27017/Author-data").then(() => {
  console.log("DB Connected")
})
app.use("/author", route)
app.listen(Port, () => {
  console.log(`listening at the the port ${Port} `)
})