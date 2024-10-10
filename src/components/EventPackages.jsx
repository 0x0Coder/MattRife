import React from 'react'
import { Button } from "@material-tailwind/react";
const EventPackages = ({ targetDivRef }) => {
      // Function to handle scrolling to the div
  const scrollToDiv = () => {
    targetDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='font-serif mt-10'>
        <div className='grid lg:grid-cols-4 gap-3 '>
            {/*Grid 1 starts here*/}
            <div className='lg:w-[300px] lg:ml-[-60px]'>
                <div className='grid justify-center'>
                <div className='bg-customGold h-[160px]  grid justify-center p-10 hover:bg-brown-300'>
                    <h1 className=' text-white text-3xl mb-2 hover:text-black'>Basic Package</h1>
                    <hr></hr>
                    <h1 className=' text-white  grid justify-center text-3xl mt-1 hover:text-black'>$499.99</h1>
                </div>
                <div className='bg-black p-1 h-[100%]'>
                        <div className='grid justify-center items-center'>
                        <svg className=' text-white text-6xl  mt-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M918 1881q-10 38-15 77t-7 80q-128-15-244-60t-215-115t-180-162t-138-200t-88-228t-31-249q0-141 36-272t103-245t160-207t208-160T751 37t273-37q141 0 271 36t245 104t207 160t161 208t103 244t37 272h-71q-14-23-29-45t-35-42q-6-87-31-169H657q-8 64-12 127t-5 129q0 65 4 128t13 128h367q0 32 5 64t13 64H679q12 57 32 125t50 133t69 122t88 93m915-1241q-39-81-92-152t-120-130t-142-105t-162-75q36 50 64 106t51 115t39 120t28 121zm-809-512q-50 0-92 27t-78 71t-64 99t-51 113t-37 110t-23 92h690q-8-39-23-92t-37-110t-50-112t-64-100t-79-71t-92-27m-292 49q-85 29-162 74T427 356T307 487t-92 153h334q11-55 27-117t40-124t52-119t64-103m-604 847q0 133 37 256h363q-8-64-12-127t-4-129q0-65 4-128t12-128H165q-37 123-37 256m85 384q39 81 92 152t120 131t144 104t162 75q-36-50-64-106t-51-115t-39-120t-29-121zm1549 181q65 33 118 81t90 108t58 128t20 142h-128q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149h-128q0-73 20-141t57-129t90-108t118-81q-75-54-116-135t-41-174q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-117 136m-226-53q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20"/></svg>
                        </div>
                        <p className='text-white grid justify-center mt-3 p-2 text-xl'>Entry to the Meet & Greet event</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3  p-3 text-xl'>Autographed memorabilia from Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Exclusive online comedy workshop with Matt</p>
                     
                        <p className='text-white grid justify-center mt-3 text-xl'>Digital download of the event highlights</p>
                        <hr className='mt-2'></hr>
                        <Button onClick={scrollToDiv} className="mt-6 mb-4" color='white' variant="gradient" fullWidth>
          Reserve Now
        </Button>
                </div>
                </div>
            </div>
            {/*Grid 1 ends here*/}
               {/*Grid 2 starts here*/}
               <div className='lg:w-[300px] lg:ml-[-25px]'>
                <div className='grid justify-center'>
                <div className='bg-customGold h-[160px]  grid justify-center p-10 hover:bg-brown-300'>
                    <h1 className=' text-white text-3xl mb-2 hover:text-black'>Bronze Package</h1>
                    <hr></hr>
                    <h1 className=' text-white  grid justify-center text-3xl mt-1 hover:text-black'>$1,199.99</h1>
                </div>
                <div className='bg-black h-[100%] p-1'>
                        <div className='grid justify-center items-center'>
                        
                        <svg className=' text-white text-6xl  mt-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m4 13.09l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zM7 23H1v-6h6zm2-13v13h6V10zm4 11h-2v-9h2zm4-8v10h6V13zm4 8h-2v-6h2z"/></svg>
                        </div>
                        <p className='text-white grid justify-center mt-3 p-2 text-xl'>Includes all Bronze package benefits</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3  p-3 text-xl'>Backstage pass with a guided tour</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Group FaceTime/Skype call with Matt before the event</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Exclusive Rife Riders merchandise kit</p>
                        <hr className='mt-2'></hr>
                        <Button  onClick={scrollToDiv} className="mt-6 mb-4" color='white' variant="gradient" fullWidth>
                        Reserve Now
                        </Button>
                </div>
                </div>
            </div>
                {/*Grid 2 ends here*/}
                   {/*Grid 3 starts here*/}
                   <div className='lg:w-[300px] lg:ml-[5px]'>
                <div className='grid justify-center'>
                <div className='bg-customGold h-[160px]  grid justify-center p-10 hover:bg-brown-300'>
                    <h1 className=' text-white text-3xl mb-2 hover:text-black'>Silver Package</h1>
                    <hr></hr>
                    <h1 className=' text-white  grid justify-center text-3xl mt-1 hover:text-black'>$2,499.99</h1>
                </div>
                <div className='bg-black h-[100%] p-1'>
                        <div className='grid justify-center items-center'>
                        <svg className=' text-white text-6xl  mt-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 508 512"><path fill="currentColor" d="M57.387 124.128L238.64 0c27.426 40.073 17.194 94.783-22.879 122.21l-108.71 74.462C60.693 229.75 105.443 300 156.647 269.287l72.473-49.595c27.426 40.074 17.217 94.816-22.879 122.21C44.481 436.777-76.324 219.328 57.387 124.128m244.205 45.97c-40.051 27.459-50.305 82.136-22.879 122.21l72.473-49.595c50.085-30.825 95.772 36.846 49.736 72.615l-108.851 74.463c-40.073 27.426-50.305 82.136-22.879 122.209l181.183-124.057c137.182-99.695 5.9-312.276-148.783-217.845"/></svg>
                        </div>
                        <p className='text-white grid justify-center mt-3 p-2 text-xl'>Includes all Silver package benefits</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3  p-3 text-xl'>Invitation to a VIP dinner party hosted by Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>One-on-one comedy masterclass session with Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Personalized video greeting from Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Join the trip to Hollywood this Christmas for a special event</p>
                        <hr className='mt-2'></hr>
                        <Button  onClick={scrollToDiv} className="mt-6 mb-4" color='white' variant="gradient" fullWidth>
                        Reserve Now
                        </Button>
                </div>
                </div>
            </div>
                {/*Grid 3 ends here*/}
                   {/*Grid 4 starts here*/}
                   <div className='lg:w-[300px] lg:ml-[40px]'>
                <div className='grid justify-center'>
                <div className='bg-customGold h-[160px]  grid justify-center p-10 hover:bg-brown-300'>
                    <h1 className=' text-white text-3xl mb-2 hover:text-black'>Gold Package</h1>
                    <hr></hr>
                    <h1 className=' text-white  grid justify-center text-3xl mt-1 hover:text-black'>$4,499.99</h1>
                </div>
                <div className='bg-black h-[100%] p-1'>
                        <div className='grid justify-center items-center'>
                        <svg className=' text-white text-6xl  mt-10' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1c4.3-.7 7.3-4.8 6.6-9.2m-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1c4.4-.7 7.3-4.8 6.6-9.2zM342 472h342c.4 0 .9 0 1.3-.1c4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3c0 4.4 3.6 8 8 8"/></svg>
                        </div>
                        <p className='text-white grid justify-center mt-3 p-2 text-xl'>Includes all Gold package benefits</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3  p-3 text-xl'>An exclusive night out in the town with Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Private dinner with Matt at a top-rated restaurant</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>One-on-one car ride to an event with Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Option to join Matt on a tour segment of your choice</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Backstage VIP access with premium seating at every show</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Personalized gift items signed by Matt</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>Limo service to and from the event</p>
                        <hr className='mt-2'></hr>
                        <p className='text-white grid justify-center mt-3 text-xl'>VIP access to Matt’s secret annual party</p>
                        <hr className='mt-2'></hr>
                        <Button onClick={scrollToDiv} className="mt-6 mb-4" color='white' variant="gradient" fullWidth>
                        Reserve Now
                        </Button>
                </div>
                </div>
            </div>
                {/*Grid 4 ends here*/}
        </div>
    </div>
  )
}

export default EventPackages