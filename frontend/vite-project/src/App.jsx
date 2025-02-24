import { Routes, Route } from "react-router-dom";
import CustomFooter from "./component/Footer";
import Nav from "./component/Navbar";
import Home from "./Pages/Home";
import InsertForm from "./Pages/Insert";
import Display from "./Pages/Display";
import AddBook from "./Pages/AddBook";
import AddNewBook from "./Pages/AddNewBook";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/insert" element={<InsertForm />} />
        <Route path="/display" element={<Display />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addnew/:id" element={<AddNewBook />} />{" "}
        {/* Dynamic route with :id */}
      </Routes>
      <CustomFooter />
    </>
  );
};

export default App;
