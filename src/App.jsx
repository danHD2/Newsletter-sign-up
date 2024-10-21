
import './App.css'

function App() {
  

  return (
    <>
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='bg-white p-5 rounded-3xl flex flex-row'>
        <div className='p-10 max-w-md'>
          <h1 className='text-darkSlateGrey font-semibold'>Stay updated!</h1>
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
         <form action="submit"className='flex flex-col mt-6'>
          <label htmlFor="email" className='text-darkSlateGrey font-semibold text-xs'>Email address</label>
          <input type="text" placeholder='email@company.com' className='text-darkSlateGrey p-3 rounded-md bg-white border mt-2 border-grey' />
          <button className='p-3 text-white bg-darkSlateGrey hover:bg-tomato transition-all border-0 mt-6'>Subscribe to monthly newsletter</button>
          </form>       
        </div>
        <div>
          <img src="/src/assets/images/illustration-sign-up-desktop.svg" alt="illustration" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
