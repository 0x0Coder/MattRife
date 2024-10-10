import React from 'react'
import { Input, Button } from "@material-tailwind/react";

const NewsLetter = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);


  return (
    <div className='mt-10 h-[500px] bg-black w-auto'>
        <div className='grid text-center p-6'>
            <p className='text-xl mt-10  text-customGold'>STAY UPDATED!</p>
            <h1 className='text-4xl mt-5'>Join the Matt Rife Events Newsletter!</h1>
            <p className='text-xl mt-5  text-customGold'>Stay in the know with the latest updates, exclusive offers, and event announcements. Subscribe now for all the exciting details delivered to your inbox. Don’t miss out, sign up today!</p>
                        
                        <div className='flex justify-center items-center mt-10'>  
                            <div className=" relative  w-full max-w-[24rem]">
                    <Input
                        type="email"
                        label="Email Address"
                        value={email}
                        color='white'
                        onChange={onChange}
                        className="pr-20 "
                        containerProps={{
                        className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        color={email ? "gray" : "blue-gray"}
                        disabled={!email}
                        className="!absolute right-1 top-1 rounded"
                    >
                        Subscribe
                    </Button>
                    </div>
                    </div>
    
        </div>

    </div>
  )
}

export default NewsLetter