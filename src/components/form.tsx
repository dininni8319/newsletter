import { FormEvent, MutableRefObject } from 'react'

type Props = {
  email: string;
  setEmail: (val: string) => void;
  isInputBlur: boolean;
  setIsInputBlur: (val: boolean) => void;
  handleSubscribe: (event: FormEvent) => void
  inputRef: MutableRefObject<HTMLInputElement | null>
}

export function Form(
  { 
    email, 
    setEmail, 
    isInputBlur, 
    handleSubscribe,
    setIsInputBlur,
    inputRef
  }: Props
) {
  // write an function to check the validity of an email
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  } 

  const handleInputBlur = () => {
    setIsInputBlur(true)
  }
  
  return (
    <form onSubmit={handleSubscribe}>
      <label htmlFor="email" className='flex justify-between items-end mt-5'>
        <span className='text-xs font-bold'>
          Email address
        </span>
        {(!validateEmail(email) && isInputBlur 
          || !email && isInputBlur
        ) && <span className='text-xs text-red-500'>
          Valid email required
        </span>}
      </label>
      <input 
        id="email"
        type="email" 
        placeholder="email@company.com"
        className={`w-full h-10 px-2 py-2 mt-1 text-xs border rounded-md 
          ${(!validateEmail(email) && isInputBlur 
            || !email && isInputBlur) ? 'border-red-500 bg-red-200' : 'border-[#E5E5E5]'
          }
        `} 
        value={email}
        ref={inputRef}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleInputBlur}
        required
      />
      <button
        type='submit'
        className={
          `w-full h-10 px-2 py-2 mt-5 text-xs rounded-md bg-[#202541] text-white 
          ${(!email || !validateEmail(email)) && "opacity-30"}
        `}
        disabled={
          !email || !validateEmail(email)
        }
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}