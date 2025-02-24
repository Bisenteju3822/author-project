import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddNewBook = () => {
  let { id } = useParams();
  const [bookName, setBookName] = useState("");
  const [price, setPrice] = useState("");
  const submitHandler = async () => {
    let api = "http://localhost:8000/author/addnew";
    try {
      const res = await axios.post(api, {
        id: id,
        bookName: bookName,
        price: price,
      });
      console.log(res);
      alert("add new successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Add New book</h1>
      <br />
      <hr />
      Enter BookName :{" "}
      <input
        type="text"
        value={bookName}
        onChange={(e) => {
          setBookName(e.target.value);
        }}
      />{" "}
      <br />
      Enter BookPrice :{" "}
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={submitHandler}>Save</button>
    </>
  );
};

export default AddNewBook;
