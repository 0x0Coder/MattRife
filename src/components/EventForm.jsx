import React from 'react'
import {
    Input,
    Select,
    Option,
    Button,
    Typography,
  } from "@material-tailwind/react";

const EventForm = () => {
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
           <form className="">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="white" className="-mb-3">
            Your Full Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
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
            className=" !border-t-blue-gray-200 focus:!border-t-white text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />


      <Select label="Select Your Experience" className='text-white'>
        <Option>Basic - $499.99</Option>
        <Option>Bronze (most popular) - $1,199.99</Option>
        <Option>Silver - $2,499.99</Option>
        <Option>Gold - $4,499.99</Option>
      </Select>
   
         
        </div>
        
        <Button className="mt-6" fullWidth>
          Book Now
        </Button>
        
      </form>

           </div>

    </div>
  )
}

export default EventForm
