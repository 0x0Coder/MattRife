import React from 'react';
import headerImage from '/charity2.jpg';
import headerImage2 from '/p22.jpeg'
import { Button } from "@material-tailwind/react";

function Header() {
  return (
    <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${headerImage2})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">Matt Rife</h1>

        <div className='flex gap-2 text-white'>
        <Button variant="outlined" className=' hover:bg-white hover:text-secondary text-white'>Book A Ticket</Button>
        <Button variant="outlined" className=' hover:bg-white hover:text-secondary text-white'>Make A Donation</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
