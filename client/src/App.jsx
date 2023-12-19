import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
