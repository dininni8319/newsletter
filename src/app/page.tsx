"use client"; // This is a client component
import React,{ useState, useRef, useEffect, FormEvent } from 'react'
import { Modal } from '@/components/modal';
import { Detail } from '@/components/details';
import { Form } from '@/components/form';

export default function Home() {
  const [email, setEmail] = useState('')
  const [isInputBlur, setIsInputBlur] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [success, setSuccess ] = useState(false)


  useEffect(() => {
    if (email) {
      setIsInputBlur(false)
    }
  }, [email])
  
  // create a function to send the email to the backend
  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const data = await res.json()

      if (data.message === 'OK') {
        setSuccess(true)
      }
    } catch (error) {
      setSuccess(true)
      setEmail("")
      console.log(error)
    }
  }
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <>
      {!success ? <main className="flex items-center justify-center w-full h-full md:pt-0">
        <div className='newsletter__container md:ps-5'>
          <div className='flex flex-col items-start md:justify-center p-5 h-full order-2 md:order-1'>
            <Detail />
            <Form
              email={email}
              setEmail={setEmail}
              isInputBlur={isInputBlur}
              setIsInputBlur={setIsInputBlur}
              inputRef={inputRef}
              handleSubscribe={handleSubscribe}
            />
          </div>
          <div className='flex lg:justify-end md:p-5 order-1 md:order-2'>
            <div className='relative w-full md:w-80 h-full img-background rounded-xl'>
              {/* Dark overlay */}
              <div className="bg-black opacity-30 absolute rounded-xl w-full md:w-80 h-full right-0 top-0 img-background">
              </div>
            </div>
          </div>
        </div>
      </main> : <Modal 
        email={email} 
        setSuccess={setSuccess} 
        setEmail={setEmail}
      />
    }
    </>
  );
}

