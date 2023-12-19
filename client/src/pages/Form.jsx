import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [timeSlot, setTimeSlot] = useState(null);
  const [month, setMonth] = useState("");

  const timeSlots = [
    { id: 1, label: "6am-7am" },
    { id: 2, label: "7am-8am" },
    { id: 3, label: "8am-9am" },
    { id: 4, label: "6pm-7pm" },
  ];

  const handleTimeChange = (timeRange) => {
    setTimeSlot(timeRange);
    console.log("Selected time range:", timeRange);
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthOptions = monthNames.map((month, index) => ({
    value: month, // Set month name as the value
    displayValue: month,
  }));

  const ageOptions = Array.from({ length: 48 }, (_, index) => ({
    value: (index + 18).toString(),
    displayValue: (index + 18).toString(),
  }));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(month);

    e.preventDefault();
    axios
    .post("http://localhost:3000/register", { name, email, mobile, age, timeSlot, month })
    .then((response) => {
      console.log(response.data);
      alert("Payment Successful");
      navigate("/");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Payment failed. Please try again.");
    });
  
  };
  return (
    <div>
      <div className="flex flex-col ml-3">
        <div className="mt-5 mb-2">
          <h1 className="font-bold text-3xl text-white">Register</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="text-white box-border border-yellow-500 md:h-96 w-96 border-4 rounded-md mb-4 md:mb-0">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="ml-2">
                <h2 className="text-left">Name</h2>
                <input
                  className="border-2 border-gray-600 bg-transparent w-full rounded-md"
                  type="text"
                  value={name}
                  placeholder="Harsh Lodhi"
                  onChange={(e) => setName(e.target.value)}
                />
                <h2 className="text-left">Email</h2>
                <input
                  className="border-2 border-gray-600 bg-transparent w-full rounded-md"
                  type="email"
                  value={email}
                  placeholder="abcxyz@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h2 className="text-left">Mobile No.</h2>
                <input
                  className="border-2 border-gray-600 bg-transparent w-full rounded-md"
                  type="number"
                  value={mobile}
                  placeholder="8109253283"
                  onChange={(e) => setMobile(e.target.value)}
                />
                <h2>Age</h2>
                <select
                  className="border-2 border-gray-600 bg-transparent w-full rounded-md"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  name="age"
                >
                  <option value="" disabled>
                    Select Age
                  </option>
                  {ageOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-black text-white"
                    >
                      {option.displayValue}
                    </option>
                  ))}
                </select>
                <div className="flex flex-col">
                  <h2 className="">Select Time Slot:</h2>
                  <div className="flex flex-wrap">
                    {timeSlots.map((slot, index) => (
                      <label key={slot.id} className="flex items-center w-1/2">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot.label}
                        checked={timeSlot === slot.label}
                        onChange={() => handleTimeChange(slot.label)}
                        className="mr-2"
                      />
                      {slot.label}
                    </label>
                    ))}
                  </div>
                </div>
                <h2>Month</h2>
<select
  className="border-2 border-gray-600 bg-transparent w-full rounded-md"
  value={month}
  onChange={(e) => setMonth(e.target.value)}
  name="month"
>
  <option value="" disabled>
    Select Month
  </option>
  {monthOptions.map((option) => (
    <option
      key={option.value}
      value={option.displayValue} // Set month name as the value
      className="bg-black text-white"
    >
      {option.displayValue}
    </option>
  ))}
</select>
                <div className="mt-3">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded-md w-full mb-2">
                    PAY ₹500
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
