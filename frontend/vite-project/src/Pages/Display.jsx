import { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";

const Display = () => {
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(null);

  const loadData = async () => {
    let api = "http://localhost:8000/author/display";
    try {
      const res = await axios.get(api);
      console.log("Full API Response:", res); // Log the full API response
      console.log("API Data:", res.data); // Log the data part of the response

      // Set the data even if it's not an array
      setApiData(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Author-Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(apiData).map((key, index) => {
            const e = apiData[key];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Display;
