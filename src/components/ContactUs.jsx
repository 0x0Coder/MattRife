import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/send-email", formData)
      .then((response) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className='font-serif'>
      <h1 className='grid justify-center text-white text-8xl p-10 m-5 border-b-2 border-black'>Contact Us</h1>
      <div className='grid lg:grid-cols-2'>
        {/* Grid 1 starts here */}
        <div className='p-10'>
          <span className='flex items-center gap-2 text-customGold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
            <small className='text-white'>Send Us An E-mail</small>
          </span>
          <h1 className='text-customGold grid mt-3 text-2xl'>General Inquiries:</h1>
          <p className='text-white grid'>info@mattrifelive.com</p>
          <h1 className='text-customGold grid mt-3 text-2xl'>Ticket Support:</h1>
          <p className='text-white grid'>tickets@mattrifelive.com</p>
          <h1 className='text-customGold grid mt-3 text-2xl'>Donation Inquiries:</h1>
          <p className='text-white grid'>donate@mattrifelive.com</p>
        </div>
        {/* Grid 2 starts here */}
        <div className='border-l-2 border-black p-10'>
          <h1 className='text-customGold grid text-2xl'>Media Relations:</h1>
          <p className='text-white grid'>media@mattrifelive.com</p>
          <h1 className='text-customGold grid mt-7 text-2xl'>Partnerships & Sponsorships:</h1>
          <p className='text-white grid'>partnerships@mattrifelive.com</p>
        </div>
        {/* Grid 2 ends here */}
      </div>

      {/* Section 2 */}
      <div className='grid mt-5 border-2 border-black p-[100px]'>
        <h1 className='text-4xl text-customGold grid justify-center'>Send A Message</h1>
        <p className='grid justify-center text-white mt-5'>Got questions, feedback, or just want to say hello? We'd love to hear from you!</p>
        <p className='grid justify-center text-white mt-5 mb-5'>Please provide us with your details and a brief message, and we'll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit}>
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
            <Typography variant="h6" color="white" className="-mb-3">
              Subject
            </Typography>
            <Input
              size="lg"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-white text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Message
            </Typography>
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              color="white"
            />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            Send Message
          </Button>
        </form>
      </div>
      {/* Section 2 ends here */}
    </div>
  );
};

export default ContactUs;
