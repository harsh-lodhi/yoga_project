import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgimg from "./bgimg.jpg";
import Navbar from "./Navbar";
import Form from "./Form";

const RegisterPage = () => {
  

  return (
    <>
      <div
        className="h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <Navbar />
        <Form />
      </div>
    </>
  );
};

export default RegisterPage;
