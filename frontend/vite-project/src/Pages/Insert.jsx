import { useState } from "react";
import axios from "axios";
import "./Insert.css"; // Import the CSS file

const Insert = () => {
  const [input, setInput] = useState({});

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let api = "http://localhost:8000/author/insert";
    try {
      const res = await axios.post(api, input);
      console.log(res);
      alert("Data Saved...");
      console.log(input);
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="dontainer">
      <h1>Insert Data</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Enter Name:</label>
        <input type="text" name="name" onChange={changeHandler} />

        <label htmlFor="email">Enter Email:</label>
        <input type="text" name="email" onChange={changeHandler} />

        <label htmlFor="city">Enter City:</label>
        <input type="text" name="city" onChange={changeHandler} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Insert;
