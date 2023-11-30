"use client"; // This is a client component
import checked from '../../public/checked.svg'
import Image from 'next/image';

type Props = {
  email: string;
  setEmail: (val: string) => void;
  setSuccess: (val: boolean) => void 
}

export function Modal({ 
  email, 
  setSuccess, 
  setEmail 
}: Props) {

  const handleDismiss = () => {
    setSuccess(false)
    setEmail("")
  }

  return (
    <div className='flex justify-center items-center p-5 h-full'>
      <div className="bg-white p-5 rounded-xl h-full md:h-96 md:w-80">
        <div className='flex flex-col justify-between h-full'>
          <div>
            <Image 
              src={checked} 
              alt="checked" 
              className='w-10 h-10 mb-6'
            />
            <h1 className='text-4xl font-semibold text-[#1A1A24]'>Thank you for subscribing!</h1>
            <p className='py-5 text-xs leading-5'>An email was sent to your email address: 
            <span className="font-bold">{"\t"}{email}</span>, please open it and confirm your subscription by clicking the button inside.</p>
          </div>
          <button
            type='submit'
            className={
              `w-full h-10 px-2 py-2 mt-5 text-xs rounded-md bg-[#202541] text-white`}
            onClick={handleDismiss}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  )
}