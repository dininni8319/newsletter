"use client";
import Image from 'next/image';
import checkedSVG from '../../public/checked.svg'

export function Detail() {
  return (
    <><div className='w-full'>
    <h1 className='text-4xl font-extrabold text-[#1A1A24]'>Stay updated!</h1>
    <p className='py-5 text-xs'>
      Join 60,000+ product product managers receiving monthly updates on:
    </p>
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
  </ul></>
  )
}