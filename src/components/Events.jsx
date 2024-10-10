import React from 'react'
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import carousel1 from '/carousel3.jpg'
import carousel2 from '/carousel1.jpg'
import carousel3 from '/carousel2.jpg'
import EventForm from './EventForm';

const Events = () => {
  return (
    <div className='font-serif'>
        {/*Section 1*/}
        <div className='grid items-center justify-center mt-10 mb-5'>
        <h1 className='text-customGold items-center justify-center grid'>Book Matt Rife Ticket(s)</h1>
        <h1 className='text-5xl text-white items-center justify-center grid'>Experience the Laughter with Matt Rife!</h1>
        <div className='text-center mt-10'>
              <Button variant="outlined" className=' hover:bg-white hover:text-secondary text-white'>Book A Ticket Now</Button>
              </div>
        </div>
         {/*Section 1 ends here*/}
         {/*Carousel Section*/}
          <div className='grid items-center justify-center mt-10 mb-5'>
          <Carousel
      className="rounded-xl"
      autoplay={true}
      autoplayDelay={2000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-customGold" : "w-4 bg-customGold/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={carousel1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={carousel2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={carousel3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

          </div>
         {/*Carousel Ends here*/}
         {/*SEction3 starts here*/}
          <div className='grid items-center justify-center mt-10 mb-5'>
          <h1 className='text-4xl text-white '>One of the greates contemporary theatre actor</h1>
          <small className='mt-5 text-white'>Get ready to roll in the aisles with laughter as we present an unforgettable lineup of comedy shows featuring the one and only Matt Rife. From stand-up comedy that hits close to home to live performances that leave you in stitches, our upcoming events promise evenings filled with joy and entertainment.</small>
          </div>
           {/*SEction3 ends here*/}
             {/*Event DEtails starts here*/}
          <div className='grid items-center justify-center mt-10 mb-5'>
          <h1 className='text-4xl text-customGold justify-center grid'>Event Details: </h1>
          <p className='mt-5 text-customGold text-xl'>September 2023</p>
          <p className='justify-center grid text-white'>Join the laughter with Matt Rife's hilarious events this September! From uproarious 18+ shows to fiery 21+ performances, there's a comedy night for everyone. Catch him at exciting venues like Fantasy Springs Resort Casino, Cosmopolitan of Las Vegas, Milwaukee Improv, DAR Constitution Hall, and more. Don't miss out on the chance to have a side-splitting good time!</p>
          <p className='mt-5 text-customGold text-xl'>October 2023</p>
          <p className='justify-center grid text-white'>Catch the laughter this October with Matt Rife's hilarious 21+ events! From Riverside to Birmingham, he's bringing the comedy to various cities. Enjoy an uproarious night of entertainment at venues like Fox Performing Arts Center, Walt Disney Theater, Mahaffey Theater, Hard Rock Live, and many more. Get ready to roll with laughter and book your tickets now!</p>
          <p className='mt-5 text-customGold text-xl'>November 2023</p>
          <p className='justify-center grid text-white'>Get ready for November comedy nights with Matt Rife's side-splitting performances! From Ames to San Jose, he's hitting the stage in various cities to deliver his signature humor. Don't miss the chance to enjoy an evening of laughter at Stephens Auditorium, Paramount Theatre, Steelhouse, Will Rogers Auditorium, Pavilion at Toyota Music Factory, and more. Book your tickets now and get ready for a hilarious night of entertainment!</p>
          <p className='mt-5 text-customGold text-xl'>December 2023</p>
          <p className='justify-center grid text-white'>Get ready to close the year with laughter as Matt Rife takes the stage in December! From California to Kentucky, he's bringing his hilarious act to various cities near you. Don't miss out on the chance to enjoy his uproarious performances at Hard Rock Live Sacramento, Sacramento Memorial Auditorium, North Charleston Performing Arts Center, Township Auditorium, Columbia County Performing Arts Center, Ovens Auditorium, Off the Hook Comedy Club, and more. Secure your tickets now and get ready to ring in the New Year with a night full of comedy and fun!</p>
          </div>
           {/*Event DEtails ends here*/}
            {/*SEction5 starts here*/}
            <div className='grid items-center justify-center  mt-20'>
            <h1 className='text-4xl text-customGold justify-center grid'>Immerse in Comedy Delight </h1>
            <p className='text-2xl mt-5 justify-center grid text-white'>Join us for an uproarious evening featuring Matt Rife’s side-splitting anecdotes and hilarious observations. From relatable stories to witty commentary on everyday life, this event promises non-stop laughter for comedy enthusiasts of all ages.</p>
            </div>
            {/*SEction5 ends here*/}
             {/*SEction6 starts here*/}
             <div className='grid items-center justify-center  mt-20'>
            <h1 className='text-4xl text-customGold justify-center grid'>Ticket Booking:</h1>
            <p className='mt-5 justify-center grid text-white'>Secure your seats now for a night of comedy brilliance! With our convenient online ticket booking system, reserving your spot is a breeze:</p>
            <p className='text-white' mt-5><strong>Step 1:</strong>  Choose the desired event from the list provided.</p>
            <p className='text-white'><strong>Step 2:</strong>  Indicate the number of tickets you wish to purchase.</p>
            <p className='text-white'><strong>Step 3:</strong> Specify your seating preferences, if available, to enhance your event experience.</p>
            <p className='text-white'><strong>Step 4:</strong> Complete the booking by selecting your preferred payment method and finalizing the transaction.</p>
            </div>
            {/*SEction6 ends here*/}
              {/*SEction5 ends here*/}
             {/*SEction6 starts here*/}
               {/*SEction7 starts here*/}
            <div className='grid items-center justify-center  mt-20'>
           <p className='text-2xl mb-10 text-customGold justify-center grid'>- Ticket Booking Form -</p>
           <p className='text-4xl mt-10 text-customGold justify-center grid'>Complete Your Booking:</p>
           <p className='text-white mt-5 mb-5'>After filling out the form, click the “Submit” button below. You will then receive an email containing the necessary details to finalize your booking and make the payment. Thank you for choosing Matt Rife Events for your entertainment experience. If you have any inquiries or need assistance, please feel free to contact us at tickets@mattrifelive.com.</p>
            </div>
             {/*SEction7 ends here*/}
             <EventForm/>

    </div>
  )
}

export default Events