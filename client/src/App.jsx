import React from "react";
import Home from "./Home/Home";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="/View-items" element={<ViewItems />} />
    </Routes>
  );
};

export default App;
