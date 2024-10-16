import React, { useState } from 'react';
import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';

const NewsLetter = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Modal open state
  const handleOpen = () => setOpen(!open);

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the request starts
    axios
      .post("https://mattrife-backend.vercel.app/send-newsletter", formData)
      .then((response) => {
        handleOpen();
        console.log("Email sent successfully!", formData);
        setLoading(false); // Set loading state to false after the request finishes
      })
      .catch((error) => {
        console.error("Error sending email", error.response?.data);
      });
  };

  return (
    <>
      {/* Modal */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Mail Sent!
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
            Close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>

      <div className='mt-10 h-[500px] bg-black w-auto'>
        <div className='grid text-center p-6'>
          <p className='text-xl mt-10 text-customGold'>STAY UPDATED!</p>
          <h1 className='text-4xl mt-5'>Join the Matt Rife Events Newsletter!</h1>
          <p className='text-xl mt-5 text-customGold'>
            Stay in the know with the latest updates, exclusive offers, and event announcements.
            Subscribe now for all the exciting details delivered to your inbox. Don’t miss out, sign up today!
          </p>
          <div className='flex justify-center items-center mt-10'>
            <div className="relative w-full max-w-[24rem]">
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  label="Email Address"
                  name="email"  // Add name to ensure correct form binding
                  value={formData.email}
                  color='white'
                  onChange={handleChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  size="sm"
                  color={formData.email ? "gray" : "blue-gray"}
                  type='submit'
                  disabled={loading}
                  className="!absolute right-1 top-1 rounded"
                >
                  {
                    loading ? (
                      <svg
                      className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    ) : ('Subscribe')
                  }
                  
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
