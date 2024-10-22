
import './App.css'
import { useState } from "react";
import mobileImage from './assets/images/illustration-sign-up-mobile.svg';
import desktopImage from './assets/images/illustration-sign-up-desktop.svg';
import successImg from './assets/images/icon-success.svg';

function App() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Valid email required");
      return false;
    }

    setError("");
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setSuccess(true);
    }
  }

  const handleDismiss = () => {
    setSuccess(false);
    setEmail('');
  }
  

  return (
    
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='bg-white p-0 h-screen md:h-auto md:p-5 md:rounded-3xl flex flex-col md:flex-row'>
        <div>
        {!success ? (
          <> 
          <div className='flex flex-col-reverse md:flex-row'>
          <div className='p-10 max-w-md md:mt-10'>
          <h1 className='text-darkSlateGrey font-semibold text-4xl md:text-5xl'>Stay updated!</h1>
          <div>
            <p className='text-darkSlateGrey py-5'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className='text-darkSlateGrey list'>
              <li className='py-2'>Product discovery and building what matters</li>
              <li className='py-2'>Measuring to ensure updates are a success</li>
              <li className='py-2'>And much more!</li>
            </ul>
          </div>
         <form onSubmit={handleSubmit} className='flex flex-col mt-6 relative'>
          <label htmlFor="email" className='text-darkSlateGrey font-semibold text-xs'>Email address</label>
          {error && <p className="md-1 font-semibold right-0 absolute text-red-500 text-sm">{error}</p>}
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@company.com' className={`text-darkSlateGrey p-3 rounded-md bg-white border mt-2 border-grey ${error ? "border-red-500 focus:ring-red-500 text-red-500" : "border-gray-300 focus:ring-blue-500 text-darkSlateGrey"}`} />
          <button type='submit' className='p-3 text-white bg-darkSlateGrey hover:bg-tomato transition-all border-0 mt-6'>Subscribe to monthly newsletter</button>
          </form>  
          </div>
          <div className='w-full max-w-md md:hidden block'>
          <img className='w-full' src={mobileImage} alt="illustration" />
        </div>
        <div className='hidden md:block'>
          <img src={desktopImage} alt="illustration" />
        </div>
          </div>
          </>
        ) : (
          <div className='flex flex-col p-10 max-w-md justify-between md:justify-normal'>
            <div>
              <img
                src={successImg}
                alt='success'
                className='mb-6 w-12 mt-24 md:mt-0'
              />
              <h1 className='text-darkSlateGrey font-semibold  mb-4'>
                Thanks for subscribing!
              </h1>
              <p className='text-darkSlateGrey mb-8'>
                A confirmation email has been sent to <strong>{email}</strong>.
                Please open it and click the button inside to confirm your
                subscription.
              </p>
            </div>
              <div>
              <button
                onClick={handleDismiss}
                className='p-3 w-full text-white bg-darkSlateGrey hover:bg-tomato transition-all border-0 rounded-md '
              >
                Dismiss message
              </button>
              </div>
            </div>
        )}     
        </div>

      </div>
    </div>
    
  )
}

export default App
