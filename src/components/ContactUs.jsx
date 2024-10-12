import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Textarea,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
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
        handleOpen();
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
            Mal Sent !
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
            Mail successfully Sent
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


      <h1 className='grid justify-center text-white text-8xl p-10 m-5 border-b-2 border-black'>Contact Us</h1>
      <div className='grid lg:grid-cols-2'>
        {/* Grid 1 starts here */}
        <div className='p-10'>
          <span className='flex items-center gap-2 text-customGold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
            <small className='text-white'>Send Us An E-mail</small>
          </span>
          <h1 className='text-customGold grid mt-3 text-2xl'>General Inquiries:</h1>
          <p className='text-white grid'>mattrifeliveassistant@gmail.com</p>
          <h1 className='text-customGold grid mt-3 text-2xl'>Ticket Support:</h1>
          <p className='text-white grid'>mattrifeliveassistant@gmail.com</p>
          <h1 className='text-customGold grid mt-3 text-2xl'>Donation Inquiries:</h1>
          <p className='text-white grid'>mattrifeliveassistant@gmail.com</p>
        </div>
        {/* Grid 2 starts here */}
        <div className='border-l-2 border-black p-10'>
          <h1 className='text-customGold grid text-2xl'>Media Relations:</h1>
          <p className='text-white grid'>mattrifeliveassistant@gmail.com</p>
          <h1 className='text-customGold grid mt-7 text-2xl'>Partnerships & Sponsorships:</h1>
          <p className='text-white grid'>mattrifeliveassistant@gmail.com</p>
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
