import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const loadData = async () => {
    let api = "http://localhost:8000/author/addbook";
    try {
      let res = await axios.get(api);
      setApiData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const showForm = (id) => {
    navigate(`/addnew/${id}`);
  };
  return (
    <>
      <h1>Add New Book</h1>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Author Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Add-Book</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td>
                  <button
                    onClick={() => {
                      showForm(e._id);
                    }}
                  >
                    AddBook
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AddBook;
