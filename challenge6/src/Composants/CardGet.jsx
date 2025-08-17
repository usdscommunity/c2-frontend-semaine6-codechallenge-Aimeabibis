import { useState } from 'react';

function CardGet() {
    const [emailValue, setEmailValue] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(true);

    const regex =new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
        if (regex.test(emailValue)) {
            return setIsEmailValid(true)
        } return setIsEmailValid(false)    
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (regex.test(emailValue)) {
             setIsEmailValid(true)
        } else {
         setIsEmailValid(false) 
        }
    }


    return(
        <div className="flex flex-col items-center text-neutral-white p-10 bg-primary-navy-800 rounded-lg w-full max-w-2xl mx-auto my-10 gap-6 ">
            <h1 className="text-2xl font-bold">Get early access today</h1>
            <p className="text-center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="flex justify-between gap-8 h-full ">
                <form onSubmit={handleSubmit} className="h-full flex flex-col gap-2 pt-10">
                    <input value={emailValue} onChange={handleEmailChange} placeholder="johnapplesee@gmail.com" className=" h-10 px-6 rounded-4xl bg-neutral-white text-black w-80 outline-none" />
                    {!isEmailValid && <span className="text-red-500 text-xs px-5">Please enter a valid email address</span>} 
                </form>
                <button className='bg-teal-200 h-10 px-10 py-2 rounded-4xl mt-10 transition-all duration-300'>Get Started For Free</button>
            </div>

        </div>
    );
}
export default CardGet;