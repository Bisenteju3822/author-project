const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
  bookname: String,
  bookprice: String,
  authorid: {
    type: mongoose.Schema.Types.ObjectId, ref: "auth"
  }
})


module.exports = mongoose.model("book", bookSchema)