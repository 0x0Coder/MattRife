import React from 'react'
import { Button } from "@material-tailwind/react";
import  { useRef } from "react";
import Header from './Header'
import Banner from '/mrpoo.jpg'
import IMG1 from '/mrrrr1.jpg'
import IMG2 from '/mrrrr111.jpg'
import IMG3 from '/mrrrr1144.jpg'
import IMG4 from '/mini.jpg'
import IMG5 from '/p22.jpeg'
import EventForm from './EventForm';
import EventPackages from './EventPackages';




const Home = () => {
      // reference for the Book Now div you want to scroll to
      const targetDivRef = useRef(null);

      // Function to handle scrolling to the div
const scrollToDiv = () => {
 targetDivRef.current?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div className='font-serif  text-white'>
        <Header targetDivRef={targetDivRef}/>
        <div className='san-serif'>
          {/*section 1*/}
          <div className="grid lg:grid-cols-2  gap-4 mt-5">
            <div class=" p-4 text-white">
              <h1 className='text-yellow-800 text-2xl'>Where Laughter Meets Change</h1>
              <h1 className='text-WHITE normal font-thin text-4xl mt-4'>WELCOME TO THE MATT RIFE LIVE - THE ULTIMATE COMEDY EXPERIENCE</h1>
            </div>
            <div class=" p-4 text-white text-1xl">
              <p>Step into a world of laughter, inspiration, and positive change. Matt Rife, the acclaimed American comedian, invites you to explore a journey that spans from the stage to philanthropy.</p>
              <h2 className='text-3xl mt-5'>Discover the Comedy Maestro</h2>
              <p className='mt-5'>With a knack for humor that transcends boundaries, Matt Rife has lit up stages across the nation with his uproarious performances. From stand-up gigs to television appearances, his unique comedic style and relatable anecdotes have earned him a special place in the hearts of audiences.</p>
              <h2 className='text-3xl mt-5'>Our Mission for Good</h2>
              <p className='mt-5'>But the laughter doesn’t end there. Beyond the stage lights, Matt Rife is equally committed to creating a lasting impact on the world through his foundation. Our mission is simple yet powerful: to channel the joy of comedy into initiatives that uplift and empower lives.</p>
              <small className='border-b-2 hover:text-customGold cursor-pointer mt-2 inline-flex items-center border-customGold'>READ MORE
              <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
              </small>
            </div>
          </div>
          {/*section 1 ends here*/}
          {/*section 2*/}
          <div className='grid text-center mt-10'>
            <h2 className='text-3xl '>Our Mission for Good</h2>
            <p className='font-extralight mt-10'>Stay tuned for a series of electrifying live shows
               and events that promise an unforgettable experience. 
               From side-splitting stand-up specials to interactive
                comedy workshops, our upcoming events calendar is 
                your gateway to a world of entertainment.</p>
                <img src={Banner}  className='mt-10'/>
          </div>
          {/*section 2 ends here*/}
           {/*section 3*/}
           <div>
            <hr className='border-0 h-[1px] bg-black mt-10'></hr>
              <div className="grid lg:grid-cols-3  gap-4 mt-[30px]">
            
                {/*grid 1*/}
                <div>
                
                <h1 className='text-4xl text-customGold'>Oct 20 • 5:00pm</h1>
                <p className='text-2xl mt-2'>Matt Rife (21+ Event)</p>
                <p>Fox Performing Arts Center, Riverside, CA</p>
                </div>
                {/*grid 1*/}
                {/*grid 2*/}
                <div>
                <h1 className='text-4xl text-customGold'>Nov 1 • 5:00pm</h1>
                <p className='text-2xl mt-2'>Matt Rife (21+ Event)</p>
                <p>Fox Performing Arts Center, Riverside, CA</p>
                </div>
                {/*grid 2*/}
                {/*grid 3*/}
                <div>
                <h1 className='text-4xl text-customGold'>Dec 1 • 5:00pm</h1>
                <p className='text-2xl mt-2'>Matt Rife (21+ Event)</p>
                <p>Fox Performing Arts Center, Riverside, CA</p>
                </div>
                  {/*grid 3*/}
              </div>
              <div className='text-center mt-10'>
              <Button variant="outlined" onClick={scrollToDiv} className=' hover:bg-white hover:text-secondary text-white'>Book Event</Button>
              </div>
            </div>
            {/*section 3 ends here*/}
            {/*Event packages*/}
            <h1 className='text-4xl text-customGold justify-center grid mt-5'>Select Your Premier Experience </h1>
            <EventPackages targetDivRef={targetDivRef} />
          {/*section 4*/}
          <div>
            <div className='grid mt-[110px] text-center'>
              <h6 className='text-customGold text-xl'>Spreading Joy, Igniting Impact</h6>
              <h6 className=' text-4xl mt-5'>Empowerment Through Laughter</h6>
              <p className='mt-5'>With every ticket you purchase and every smile you share, you contribute to the foundation’s noble endeavors. From educational scholarships to community outreach programs, your support fuels positive change in ways that truly matter.</p>

            </div>
            <div className='grid lg:grid-cols-3 mt-10 gap-2'>
              <div>
                <img src={IMG1} />
                <p className='text-left mt-3'>On Stage Brilliance</p>
                <p className='text-2xl'>MESMERIZING PERFORMANCES</p>
              </div>
              <div>
                <img src={IMG2} />
                <p className='text-left mt-3'>Captivating Moments</p>
                <p className='text-2xl'>A Glimpse of Our Performances</p>
              </div>
              <div>
                <img src={IMG3} />
                <p className='text-left mt-3'>Unforgettable Events</p>
                <p className='text-2xl'>Memories in the Spotlight</p>
              </div>

            </div>
          </div>
          {/*section 4 ends here*/}
           {/*SEction6 starts here*/}
           <div className='grid items-center justify-center  mt-20'   ref={targetDivRef}>
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
           <p className='text-white mt-5 mb-5'>After filling out the form, click the “Submit” button below. You will then receive an email containing the necessary details to finalize your booking and make the payment. Thank you for choosing Matt Rife Events for your entertainment experience. If you have any inquiries or need assistance, please feel free to contact us at mattrifehelpinghand@outlook.com.</p>
            </div>
             {/*SEction7 ends here*/}
             <EventForm/>
            {/*section 5*/}
            <div>
              <div className='grid mt-[110px] text-center'>
              <h1 className='text-3xl text-customGold'>Laughing for a Purpose, Acting for Change</h1>
              <h1 className='text-5xl mt-3 text-white'>Join the Movement</h1>
              <p className='text-l mt-5'>Ready to dive into a realm where laughter intersects with purpose? Secure your event tickets and become a part of our journey to create a brighter future. Additionally, your contributions, whether large or small, empower us to make a real difference through our charitable initiatives.</p>
              </div>
            </div>
            {/*section 5 ends here*/}
            {/*section 6*/}
            <div>
              <div className='grid lg:grid-cols-2 mt-20'>
                <div>
                  <p className='text-customGold text-2xl'>Tours</p>
                </div>
                <div>
                  <p className='text-5xl'>ProbleMATTIC World Tour</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-10 text-customGold text-3xl'>Introducing the ProbleMATTIC World Tour: Where Comedy Meets the Globe!</h1>
                  <p className='mt-4'>Are you ready to embark on an uproarious journey that spans across continents? The “ProbleMATTIC World Tour” is here to sweep you off your feet, and it’s a laugh riot that’s taking the world by storm!</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>A Hilarious Odyssey:</h1>
                  <p className='mt-5'>Join the incomparable comedy maestro, Matt Rife, on a whirlwind adventure that’s making audiences double over with laughter. From the heart of the USA to the vibrant stages of Australia, the chic venues of Canada, and the cultural hubs of Europe, Matt is leaving no stone unturned on his quest to spread unadulterated comedy joy.</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>Limited Tickets, Boundless Laughter:</h1>
                  <p className='mt-5'>With most venues already sold out, securing your ticket is a race against time! Don’t miss this chance to witness the comedy event of a lifetime. Matt Rife’s sharp wit, relatable humor, and charismatic stage presence are a comedic concoction that will leave you in splits.</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>A Journey to Remember:</h1>
                  <p className='mt-5'>The “ProbleMATTIC World Tour” is not just an event; it’s an experience. Mark your calendars and gather your friends for an evening of unbridled hilarity that will leave you smiling long after the curtain falls. From side-splitting stand-up to heartwarming anecdotes, Matt Rife will take you on an emotional rollercoaster.</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>Join the Laughter Movement: </h1>
                  <p className='mt-5'>Come be a part of this international laughter movement. Whether you’re a comedy connoisseur or just looking for a fantastic night out, the “ProbleMATTIC World Tour” promises to deliver an unforgettable experience.</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>Book Your Seats Now:</h1>
                  <p className='mt-5'>Don’t be left out of the comedy revolution. Book your tickets today and secure your spot in the audience. Remember, laughter knows no borders, and Matt Rife is ready to prove it!</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>Tour Dates:</h1>
                  <p className='mt-5'>Ongoing till December 2024</p>
                  <hr className='border-0 h-[1px] bg-black mt-10'></hr>
                  <h1 className='mt-5 text-2xl'>Venues:</h1>
                  <p className='mt-5'>Across USA, Australia, Canada, and Europe</p>
<p className='mt-5'>Join us for an evening of unparalleled humor, camaraderie, and unscripted fun. The ProbleMATTIC World Tour is your ticket to a world of laughter, so grab it with both hands!</p>
                 
                </div>

              </div>
            </div>
            {/*section 6 ends here*/}
             {/*section 7 starts here*/}
             <div className='grid lg:grid-cols-2 mt-20 gap-8'>
              <div>
                <img src={IMG4} />
              </div>
              <div>
                <h1 className='text-customGold'>Get Your Tickets Today!</h1>
                <h1 className='text-5xl'>Join us for the Laughter-Loaded 'ProbleMATTIC World Tour</h1>
                <hr className='border-0 h-[1px] bg-black mt-5'></hr>
                <div className='grid grid-cols-2 mt-5 p-3 '>
                  <div>
                    <p className='p-4'>Get ready to laugh out loud! Join us for the “ProbleMATTIC World Tour” and secure your tickets now.</p>
                  </div>
                  <div className='border-l-2 border-black'>
                    <p className='p-4 text-3xl'>2023/
                    2024</p>
                  </div>

                </div>
                <hr className='border-0 h-[1px] bg-black '></hr>
                <small className='border-b-2 hover:text-customGold cursor-pointer mt-5 inline-flex items-center border-customGold'>BUY TICKETS
              <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
              </small>
              </div>

             </div>
              {/*section 7 ends here*/}
              



        </div>
    </div>
  )
}

export default Home