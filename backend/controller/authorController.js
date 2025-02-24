const authModel = require("../models/authModel")
const bookModel = require("../models/bookModel")




const insertData = async (req, res) => {
  const { name, email, city } = req.body;
  const data = await authModel.create({
    name: name,
    email: email,
    city: city
  })
  res.status(200).send("Data Inserted")
}
const addBookData = async (req, res) => {
  const data = await authModel.find()
  res.status(200).send(data)
}
const addNewData = async (req, res) => {
  const { id, bookName, price } = req.body;
  const Data = await bookModel.create({
    authorid: id,
    bookname: bookName,
    bookprice: price
  })
  await authModel.findByIdAndUpdate(id, { $push: { bookid: Data._id } })
  res.send(Data)
}
const displayAll = async (req, res) => {
  let authdata = await authModel.find().populate('bookid')
  res.send('Okk')
}


module.exports = {
  insertData,
  addBookData,
  addNewData,
  displayAll
}