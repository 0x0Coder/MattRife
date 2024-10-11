import React, { useRef } from 'react'
import DonationImage from '/illustrationcharitysupport.png'
import qrcode from '/qrcode.jpg'
import qrcode2 from '/qrcode2.jpg'
import donateimg1 from '/donate1.jpg'
import donateimg2 from '/donate2.jpg'
import donateimg3 from '/donate3.jpg'
import donateimg4 from '/donate4.jpg'
import { Progress, 
    Typography,
    Button,
    Carousel,
    Accordion,
    AccordionHeader,
    AccordionBody,
 } from "@material-tailwind/react";
 import refugeimg1 from '/refuge1.jpg'
 import refugeimg2 from '/refuge2.jpg'
 import refugeimg3 from '/refuge3.jpg'
 import refugeimg5 from '/refuge5.jpg'
 import refugeimg6 from '/refuge6.jpg'


const Donations = () => {
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    //refrence to the donation div to scrollto
    const targetDivRef = useRef(null);

           // Function to handle scrolling to the div
  const scrollToDiv = () => {
    targetDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };
   



  return (
    <div className='san-serif'>
        <div className='grid justify-center bg-black p-8' >
            <h1 className='text-customGold grid justify-center'>- DONATE NOW -</h1>
           <div className='grid items-center justify-center'> <img src={DonationImage} className='w-[600px] ' /></div>
            <p className='grid text-left text-white'>Total Amount Raised so far... (Updated Monthly)</p>
                <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="white" variant="h6">
                        $618K
                        </Typography>
                        <Typography color="white" variant="h6">
                        50%
                        </Typography>
                    </div>
                    <Progress value={50} color="green" />
                    </div>

        <Accordion ref={targetDivRef} open={open === 1} >
            <AccordionHeader onClick={() => handleOpen(1)} className={`text-white transition-colors ${
                open === 1 ? "text-customGold hover:!text-customGold" : ""
            }`}>Donate With Bitcoin (BTC)
            </AccordionHeader>
            <AccordionBody>
            <h1 className='grid text-left text-white text-4xl mt-10 '>Bitcoin Donation Instructions</h1>
            <p className='text-white mt-3'>Thank you for your generosity in supporting the #SupportTheLEssPriveledge campaign through Bitcoin donations. To make a donation, please follow these simple steps:</p>
            <p className='text-white mt-2'>1. Open your Bitcoin wallet.</p>
            <p className='text-white'>2. Scan the QR code below or manually enter the wallet address:</p>
            <h1 className='grid text-white text-left text-2xl font-bold'>Bitcoin Wallet Address:</h1>
            <p className='text-white text-left grid'>bc1qt0ds8znvhkx4dalcdvadmyzjeu54nk2lupz85e</p>
            <h1 className='grid text-left text-white font-bold mt-5 text-xl'>QR Code:</h1>
            <img src={qrcode} className='mt-3' />
            <p className='text-white mt-4'>3. Enter the amount you wish to donate.</p>
            <p className='text-white mt-2'>4. Double-check the wallet address to ensure it matches the one provided above.</p>
            <p className='text-white mt-2'>5. Confirm the transaction details and initiate the Bitcoin transfer.</p>
            <p className='text-white mt-2'>Your donation will directly support Orphans and less priviledge in Worldwide through the #SupportTheLEssPriveledge campaign.</p>
            <p className='text-white mt-2'>If you have any questions or need assistance, please don’t hesitate to contact our support team. Your contribution makes a meaningful difference, and we appreciate your support.</p>
            </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
      <AccordionHeader onClick={() => handleOpen(2)} className={`text-white transition-colors ${
            open === 2 ? "text-customGold hover:!text-customGold" : ""
          }`}>Donate With USDT (Trc20)</AccordionHeader>
        <AccordionBody>
            <h1 className='grid text-left text-white text-4xl mt-10 '>USDT Donation Instructions</h1>
            <p className='text-white mt-3'>Thank you for your generosity in supporting the #SupportTheLEssPriveledge campaign through Bitcoin donations. To make a donation, please follow these simple steps:</p>
            <p className='text-white mt-2'>1. Open your Bitcoin wallet.</p>
            <p className='text-white'>2. Scan the QR code below or manually enter the wallet address:</p>
            <h1 className='grid text-white text-left text-2xl font-bold'>USDT Wallet Address:</h1>
            <p className='text-white text-left grid'>TRAK3zgZnuoYSK6EkaabpfxhJgL77kpipN</p>
            <h1 className='grid text-left text-white font-bold mt-5 text-xl'>QR Code:</h1>
            <img src={qrcode2} className='mt-3' />
            <p className='text-white mt-4'>3. Enter the amount you wish to donate.</p>
            <p className='text-white mt-2'>4. Double-check the wallet address to ensure it matches the one provided above.</p>
            <p className='text-white mt-2'>5. Confirm the transaction details and initiate the USDT trc20 transfer.</p>
            <p className='text-white mt-2'>Your donation will directly support Orphans and less priviledge in Worldwide through the #SupportTheLEssPriveledge campaign.</p>
            <p className='text-white mt-2'>If you have any questions or need assistance, please don’t hesitate to contact our support team. Your contribution makes a meaningful difference, and we appreciate your support.</p>
            </AccordionBody>
      </Accordion>
      

        </div>

        {/*Section 2 starts here*/}
        <div className='grid justify-center mt-10'>
          <h1 className='text-customGold text-4xl grid justify-center'>Impact the lives of orphans and less privileged children.</h1>
          <p className='text-customGold text-xl grid justify-center mt-5'>Your Compassion, Their Lifeline</p>
        </div>
        {/*Section 2 ends here*/}
        {/*Section 3 starts here*/}
        <div className='grid lg:grid-cols-2 gap-4 mt-10'>
            <div>
                <img src={donateimg1} />
                <img src={donateimg2} className='mt-3'/>
            </div>
            <div>
                <img src={donateimg3}  />
                <img src={donateimg4} className='mt-3' />
            </div>

        </div>
        {/*Section 3 ends here*/}
        {/*Section 4 starts here*/}
        <div className='grid  mt-10'>
            <h1 className='text-white text-3xl grid text-left'>Change Lives, Write a Story of Resilience</h1>
            <h1 className='text-customGold text-5xl grid text-left mt-10'>Matt Rife Foundation: Empowering Futures, Changing Lives  </h1>
            <p className='text-white mt-5'>
            At the Matt Rife Foundation, we believe that every child, regardless of their background, deserves a chance to thrive. 
            Our mission is to uplift orphans and less privileged children by providing essential resources, emotional support, and opportunities for a brighter future. 
            </p>
            <p className='text-white mt-3'>
            Founded by comedian Matt Rife, who is passionate about making a positive difference, our foundation focuses on education, healthcare, and emotional well-being for the children who need it most.
            </p>
            <div className='mt-10 grid justify-end'>
              <Button onClick={scrollToDiv} variant="outlined" className='  hover:bg-white hover:text-secondary text-white'>Donate Now</Button>
              </div>

        </div>
        {/*Section 4 ends here*/}
        {/*Section 5 starts here*/}
        <div className='grid mt-10 justify-center'>
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
        src={refugeimg1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={refugeimg2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={refugeimg3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

        </div>
        {/*Section 5 ends here*/}
        {/*Section 6 starts here*/}
        <div className='grid mt-10'>
            <h1 className='text-customGold text-5xl'>Our Promise of Hope</h1>
            <p className='text-white mt-5'>To create a world where every child feels valued and supported, giving them the tools and encouragement to chase their dreams. Through a combination of grassroots efforts, community partnerships, and fundraising events, we are building a stronger foundation for those who have been overlooked or underserved.</p>
            <h1 className='text-customGold text-5xl mt-5'>A $250,000 Goal to Rebuild Lives</h1>
            <p className='text-white  text-xl mt-5'>Our mission is clear – to raise $250,000 by the end of this year, and every cent of your contribution will go towards helping the victims of the Russo-Ukrainian War. Here’s how your donation will make a difference:</p>
            <p className='text-white  text-xl mt-5'><strong>1. Emergency Relief:</strong> Your donations will provide immediate assistance to those in need, including food, water, blankets, and essential supplies. This assistance will ensure that the victims have their basic needs met during this critical time.</p>
            <p className='text-white  text-xl mt-2'><strong>2. Medical Support:</strong> By donating, you can contribute to the provision of medical supplies, equipment, and personnel to overwhelmed hospitals and clinics. This will enable them to provide life-saving care to the injured and provide assistance to those in need of medical attention.</p>
            <p className='text-white text-xl mt-2'><strong>3. Shelter and Rehabilitation:</strong>  Donations will help in providing safe and secure shelters for displaced individuals. It will also contribute to the rebuilding of homes and infrastructure, facilitating the rehabilitation process.</p>
            <p className='text-white  text-xl mt-2'><strong>4. Psychological Assistance: </strong> Your support will enable the provision of counseling services and mental health support to those affected by the conflict. This will aid in their recovery and help them rebuild their lives with resilience.</p>
            <div className='mt-10 grid text-xl justify-end'>
              <Button onClick={scrollToDiv} variant="outlined" className='  hover:bg-white hover:text-secondary text-white'>Donate Now</Button>
              </div>
        </div>
        {/*Section 6 ends here*/}
          {/*Section 7 starts here*/}
          <div className='grid mt-10 justify-center'>
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
        src={refugeimg5}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={refugeimg6}
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>

        </div>
        {/*Section 7 ends here*/}
        {/*Section 8 starts here*/}
        <div className='grid mt-10'>
            <h1 className='text-5xl text-customGold'>Your Gift, Their New Beginning</h1>
            <p className='text-white text-xl mt-5'>Donating is simple. Just click the “Donate Now” button below and contribute what you can. Every dollar gets us closer to our goal and helps us bring hope and healing to those who need it most.</p>
            <h1 className='text-5xl text-customGold mt-10'>A Story of Resilience Awaits</h1>
            <p className='text-white text-xl mt-5'>With your support, we aim to transform the lives of Russo-Ukrainian War victims by providing them with the tools they need to rebuild and recover. Together, we’ll create a story of resilience, strength, and hope that will echo for generations to come.</p>
            <h1 className='text-5xl text-customGold mt-10'>In Times of Despair, Let’s Be Their Beacon of Light</h1>
            <p className='text-white text-xl mt-5'>For any questions or assistance with your donation, please reach out to us at donate@mattrifelive.com. Your compassion is the beacon of light that will help guide these brave souls out of the darkness.</p>

        </div>
        {/*Section 8 ends here*/}
        {/*Section 9 startss here*/}
        <div className='grid mt-10'>
            <h1 className='grid justify-center text-customGold text-5xl'>A Deeper Look into the Crisis           </h1>
            <p className='text-white text-xl mt-5'>In the heart of Eastern Europe, the Russo-Ukrainian War has waged on for years. What began as a political dispute has escalated into a full-blown humanitarian crisis, affecting millions. Families have been separated, lives have been lost, and the future remains uncertain.</p>
            <h1 className='text-5xl text-customGold mt-10'>The Plight of Displaced Families</h1>
            <p className='text-white text-xl mt-5'>Imagine the pain of having to flee your home in the dead of night, leaving behind everything you’ve ever known. This is the reality for countless families in war-torn regions. They’ve sought refuge in overcrowded temporary shelters, facing unimaginable living conditions.</p>
            <h1 className='text-5xl text-customGold mt-10'>Overwhelmed Medical Facilities</h1>
            <p className='text-white text-xl mt-5'>The war has taken a heavy toll on healthcare facilities. Hospitals and clinics are overwhelmed, struggling to cope with the influx of wounded individuals. Medical supplies are running critically low, and skilled medical professionals are in high demand.</p>
            <h1 className='text-5xl text-customGold mt-10'>A Lack of Basic Necessities</h1>
            <p className='text-white  text-xl mt-5'>Access to food, clean water, and sanitation facilities is limited in conflict-affected areas. The lack of these basic necessities poses a significant threat to the health and well-being of the victims, especially the children.</p>
            <h1 className='text-5xl text-white mt-10'>Psychological Trauma</h1>
            <p className='text-white text-xl mt-5'>The prolonged conflict has taken a toll on the mental health of the affected population. Many have experienced trauma and require psychological support to recover and rebuild their lives. Your donation can help heal not just physical wounds but emotional ones too.</p>
            <h1 className='text-5xl text-customGold mt-10'>Children Caught in the Crossfire</h1>
            <p className='text-white text-xl mt-5'>The youngest victims of this crisis are the children. They’ve witnessed horrors that no child should ever see. Their education has been disrupted, their dreams put on hold. Your support can give them a chance at a brighter future.</p>
            <p className='text-white mt-10 text-5xl'>Thank you for your generosity. Together, we’ll be the change they desperately need.</p>
            <div className='mt-10 grid justify-end'>
              <Button onClick={scrollToDiv} variant="outlined" className='  hover:bg-white hover:text-secondary text-white'>Donate Now</Button>
              </div>
        </div>
         {/*Section 9 ends here*/}
         {/*Section 10*/}
         <div className='grid mt-10'>
            <h1 className='grid text-left text-5xl text-customGold'>Supporting Positive Change Through Your Generosity</h1>
            <p className='text-white text-xl  mt-5'>At the heart of the Matt Rife Foundation lies a commitment to creating positive change in the world. Our foundation is driven by the desire to make a meaningful impact on the lives of individuals and communities. By contributing to our cause, you become an integral part of this mission to bring about lasting transformation.</p>
         </div>
        {/*Sectiopn 10 ends here*/}
           {/*Section 11*/}
           <div className='grid mt-10'>
            <h1 className='grid text-left text-5xl text-customGold'>Our Cause and Goals:</h1>
            <h1 className='grid text-left text-5xl text-white mt-5'>Empowering Communities, Nurturing Dreams</h1>
            <p className='text-white text-xl mt-5'>At the Matt Rife Foundation, our cause is centered around empowering underprivileged communities and nurturing dreams that might otherwise go unrealized. We focus on various initiatives, from education to healthcare, from providing clean water to supporting arts and culture. Our overarching goal is to uplift individuals and help them build better, brighter futures for themselves and their families.</p>
            <h1 className='grid text-left text-5xl text-customGold mt-10'>Creating Lasting Impact</h1>
            <p className='text-white text-xl mt-5'>Every dollar you donate contributes to projects that bring about real change. Whether it’s building schools, establishing medical facilities, supporting young talents, or addressing urgent community needs, your contribution directly fuels these endeavors. With your help, we’re not just changing lives; we’re shaping the future.</p>
        
         </div>
        {/*Sectiopn 11 ends here*/}
          {/*Section 12*/}
          <div className='grid mt-10'>
            <h1 className='grid text-left text-5xl text-customGold'>Secure Donation Form:</h1>
            <h1 className='grid text-left text-5xl text-white mt-5'>Make a Meaningful Difference</h1>
            <p className='text-white text-xl mt-5'>Your generosity matters, and we’ve made it simple and secure to contribute to our initiatives. Our donation form ensures that your financial information is protected, allowing you to give with confidence. Whether you’re passionate about education, healthcare, or any other aspect of our work, your donation will have a direct impact on the lives of those we serve.</p>
            <h1 className='grid text-left text-5xl text-customGold mt-10'>Options for Giving:</h1>
            <h1 className='grid text-left text-5xl text-customGold mt-5'>Flexibility That Matches Your Passion</h1>
            <p className='text-white text-xl mt-5'>We offer a range of giving options to suit your preferences. You can make a one-time donation that contributes to our ongoing projects, or you can choose to make a recurring donation, providing consistent support for our initiatives over time. Your commitment, no matter the size, plays a vital role in our ability to create positive change.</p>
            <h1 className='grid text-left text-5xl text-customGold mt-10'>Join the Circle of Change</h1>
            <p className='text-white text-xl mt-5'>Your partnership with the Matt Rife Foundation is an investment in the future. Together, we can turn dreams into reality, create opportunities where they are needed most, and leave a legacy of compassion and progress.</p>
         </div>
        {/*Sectiopn 12 ends here*/}
             {/*Section 13*/}
             <div className='grid mt-10'>
            <h1 className='grid text-left text-4xl text-customGold'>Ready to Make a Difference?</h1>
            <p className='grid text-left text-white mt-5'>Your generosity can change lives. Join us in making a lasting impact. Select your preferred giving option and take the first step towards a brighter future for individuals and communities. <strong>Choose Your Contribution:</strong></p>
            <p className='text-white mt-2'>1. One-Time Donation</p>
            <p className='text-white mt-2'>2. Recurring Donation</p>
            <p className='text-white mt-2'>3. Together, let’s make a world of difference.</p>
            <p className='text-white mt-10'>For any questions or further assistance, please feel free to reach out to our dedicated support team at <strong>donate@mattrifelive.com.</strong></p>
            <h1 className='grid text-left text-4xl text-white mt-5'>Cryptocurrency Charity Donation Channel</h1>
            <p className='text-white mt-5'>At Matt Rife Events, we believe in the power of giving back, and we’re thrilled to introduce our cryptocurrency-based donation channel for the #StandWithUkraine campaign. Your generosity can make a significant impact to the less Priveledged Wrold wide and the war victims in Ukraine.</p>
            <h1 className='grid text-left text-4xl text-white mt-5'>Donation Instructions:</h1>
            <p className='text-white mt-5'>Contributing to our charitable endeavors is easy. Here’s how you can make a donation:</p>
            <p className='text-white mt-2'><strong>1. Select Your Preferred Cryptocurrency: </strong>Choose the cryptocurrency you’d like to use for your donation. We accept a variety of digital assets, making it convenient for you.</p>
            <p className='text-white mt-2'><strong>2. Calculate Your Contribution:</strong> Decide the amount you wish to donate to support the less Priveledged children and War Victims WorldWide.</p>
            <p className='text-white mt-2'><strong>3. Make Your Donation:</strong>  Use your cryptocurrency wallet to send your contribution to the wallet address provided below.</p>
            <div className='mt-10 grid justify-end'>
              <Button onClick={scrollToDiv} variant="outlined" className='  hover:bg-white hover:text-secondary text-white'>Donate Now</Button>
              </div>
         </div>
        {/*Sectiopn 13 ends here*/}
         {/*Sectiopn 14 starts here*/}
         <div className='grid mt-5'>
            <h1 className='text-white text-4xl'>Your Generosity Matters:</h1>
            <p className='text-white mt-3'>Your donation can make a meaningful difference in the lives of those affected by conflict in Ukraine. We appreciate your generosity and commitment to standing with Ukraine during this challenging time.</p>
            <p className='text-white mt-3'>Join us in supporting the #LEssPriveledge campaign through cryptocurrency donations. If you have any questions or need assistance with your donation, please don’t hesitate to contact our customer support team at [support email or phone number].</p>
            <p className='text-white mt-3'>Thank you for being a part of the Matt Rife Events community and contributing to the #LEssPriveledge campaign. Together, we can make a positive impact and provide hope to those in need.</p>
            <div className='mt-10 mb-10 grid justify-end'>
              <Button variant="outlined" onClick={scrollToDiv} className='  hover:bg-white hover:text-secondary text-white'>Donate Now</Button>
              </div>
         </div>
          {/*Sectiopn 14 ends here*/}

    </div>
  )
}

export default Donations
