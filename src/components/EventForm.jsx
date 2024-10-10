import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experience: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle experience selection
  const handleExperienceChange = (value) => {
    setFormData({ ...formData, experience: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/send-bookingemail", formData)
      .then((response) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email", error.response.data);
      });
  };

  return (
    <div className='font-serif'>
      {/*section 1*/}
      <div className='grid '>
        <h1 className='justify-left grid text-white text-2xl'>Secure Your Experience Today!</h1>
        <p className='text-white mt-5 '>These exclusive packages are designed for the most discerning fans and are available in very limited quantities. Secure your spot now and ensure your place in the inner circle for a year filled with laughter, luxury, and unforgettable moments.</p>
        <h1 className='justify-left grid text-white text-2xl mt-5'>Instructions for Completion:</h1>
        <p className='text-white mt-5'>Please fill out all required fields accurately to ensure your booking is processed efficiently.</p>
        <p className='text-white '>Upon submission, you will receive an email confirmation with details about the event and further instructions.</p>
        <h1 className='justify-left grid text-white text-2xl mt-5'>Note:</h1>
        <p className='text-white mt-5'>All personal information is handled in strict confidentiality and will only be used for the purpose of this event booking.</p>
      </div>
      {/*section 2*/}
      <div className='grid mt-5'>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-white text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Email Address
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-white text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Select 
              label="Select Your Experience"
              onChange={handleExperienceChange}
              className='text-white'
            >
              <Option value="Basic - $499.99">Basic - $499.99</Option>
              <Option value="Bronze (most popular) - $1,199.99">Bronze (most popular) - $1,199.99</Option>
              <Option value="Silver - $2,499.99">Silver - $2,499.99</Option>
              <Option value="Gold - $4,499.99">Gold - $4,499.99</Option>
            </Select>
          </div>
          
          <Button className="mt-6" type="submit" fullWidth>
            Book Now
          </Button>
          
        </form>
      </div>
    </div>
  );
}

export default EventForm;
