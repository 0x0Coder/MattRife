import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const EventForm = () => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [formData, setFormData] = useState({
    fullName: '',
    phone:'',
    email: '',
    experience: '',
    payment: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle experience selection
  const handleExperienceChange = (value) => {
    setFormData({ ...formData, experience: value });
  };

   // Handle experience selection
   const handlePaymentChange = (value) => {
    setFormData({ ...formData, payment: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mattrife-backend-72amhg0qw-0x0coders-projects.vercel.app/send-bookingemail", formData)
      .then((response) => {
        handleOpen("sm");
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email", error.response.data);
      });
  };

  return (
    <div className='font-serif'>
      {/*modal*/}
      <Dialog open={open} handler={handleOpen}>
      <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Booking Successful !
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="green" variant="h4">
            Booking successfull
          </Typography>
          <Typography className="text-center font-normal">
            Your Request has been received and is being processed by the foundation
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
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
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="+1 943 433 443"
              name="phone"
              value={formData.phone}
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
              color='white'
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
                color='white'
            >
              <Option value="Basic - $499.99">Basic - $499.99</Option>
              <Option value="Bronze (most popular) - $1,199.99">Bronze (most popular) - $1,199.99</Option>
              <Option value="Silver - $2,499.99">Silver - $2,499.99</Option>
              <Option value="Gold - $4,499.99">Gold - $4,499.99</Option>
            </Select>
            
            <Select 
              label="Select Payment Method"
              onChange={handlePaymentChange}
              className='text-white'
                color="white"
            >
              <Option value="PayPal">PayPal</Option>
              <Option value="Venmo">Venmo</Option>
              <Option value="CashApp">CashApp</Option>
              <Option value="Cryptocurrency (Bitcoin)">Cryptocurrency (Bitcoin)</Option>
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
