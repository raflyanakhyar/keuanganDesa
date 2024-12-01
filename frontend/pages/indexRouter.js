import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import index from "./index";
import editPendes from "./editPendes";

function IndexRouter() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={index} />
      <Route path="/editPendes/:id" element={editPendes} />
    </Routes>
  </BrowserRouter>;
}
