import React from "react";
import Home from "./Home/Home";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/view-items" element={<ViewItems />} />
      </Routes>
    </>
  );
};

export default App;
