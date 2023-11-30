"use client"; // This is a client component

import Image from 'next/image';
import checkedSVG from '../../public/checked.svg'
import React,{ useState, useRef, useEffect } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isInputBlur, setIsInputBlur] = useState(false)
  const inputRef = useRef(null)

  const handleInputBlur = () => {
    setIsInputBlur(true)
  }

  useEffect(() => {
    if (email) {
      setIsInputBlur(false)
    }
  }, [email])
  
  // create a function to send the email to the backend
  const handleSubscribe = async () => {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
     <main className="flex items-center justify-center w-full h-full pt-5 md:pt-0">
      <div className='newsletter__container ps-5'>
        <div className='flex flex-col items-start md:justify-center p-5 h-full order-2 md:order-1'>
          <div className='w-full'>
            <h1 className='text-4xl font-extrabold text-[#1A1A24]'>Stay updated!</h1>
            <p className='py-5 text-xs'>Join 60,000+ product product managers receiving monthly updates on:</p>
          </div>
          <ul>
            <li className='flex py-2'>
              <Image 
                src={checkedSVG} 
                alt="checked" 
                className='w-5 h-5'
              />
              <span className='ps-2 text-xs'>
                Product discover and build what metters
                </span>
            </li>
            <li className='flex py-2'>
              <Image 
                src={checkedSVG} 
                alt="checked" 
                className='w-5 h-5'
              />
              <span className='ps-2 text-xs'>
                Measuring to ensure updates are a success
              </span>
            </li>
            <li className='flex py-2'>
              <Image 
                src={checkedSVG} 
                alt="checked" 
                className='w-5 h-5'
              />
               <span className='ps-2 text-xs'>
                And much more!
               </span>
            </li>
          </ul>
          <div>
            <div>
              <input 
                type="email" 
                placeholder="email@company.com"
                className={`w-full h-10 px-2 py-2 mt-5 text-xs border rounded-md ${!email && isInputBlur ? 'border-red-500 bg-red-200' : 'border-[#E5E5E5]'}`} 
                value={email}
                ref={inputRef}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleInputBlur}
                required
              />
              <button
                className='w-full h-10 px-2 py-2 mt-5 text-xs rounded-md bg-[#202541] text-white'
              >Subscribe to monthly newsletter</button>
            </div>
          </div>
        </div>
        <div className='flex md:justify-end p-5 order-1 md:order-2'>
          <div className='relative w-full md:w-80 h-full img-background rounded-xl'>
            {/* Dark overlay */}
            <div className="bg-black opacity-30 absolute rounded-xl w-full md:w-80 h-full right-0 top-0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

