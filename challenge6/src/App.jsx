
import './App.css'
import AccessCard from './Composants/AccessCard'
import Card from './Composants/Card'
import Footer from './Composants/Footer'

function App() {
  

  return (
    <>
      <div className=''>
        <header className='flex justify-between items-center w-full h-15 px-15 py-20 cursor-pointer'>
          <img src="../public/images/logo.svg" className='h-fit w-30' alt="" />
          <ul className='flex gap-8 text-neutral-white'>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </header>

        {/* main */}
        <section className='flex flex-col items-center h-screen text-neutral-white gap-2 '>
          <img src="../public/images/illustration-intro.png" className='' alt="" />
          <h1 className='text-5xl font-bold mt-10 text-center pt-2'>All your files in one secure location,<br /> accessible anywhere.</h1>
          <p className='text-xl mt-5 text-center'>Fylo stores all your most important files in one secure location. <br /> Access them wherever you need, share and collaborate with <br /> friends family, and co-workers.</p>
          <button className='bg-teal-200 px-20 py-2 rounded-2xl mt-10 transition-all duration-300 b-10'>Get Started</button>
        </section>

        {/* acccess */}
        <section className='bg-[url("../public/images/bg-curvy-desktop.svg")] bg-no-repeat bg-cover py-30 h-fit border-amber-500 border-2 '>
          <AccessCard />

          <div className='flex justify-center text-neutral-white px-20 py-10 gap-10'>
            <img src="../public/images/illustration-stay-productive.png" className='h-1/2 w-1/2' alt="" />
            <div className='flex flex-col mt-15 w-1/2 gap-4 '>
              <h1 className='text-3xl font-bold pt-10'>Stay productive, <br /> wherever you are</h1>
              <p className=' text-sm'>Never let location be an issue when
              accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p className=' text-sm'>Securely share files and folders with
              friends, family and colleagues for live collaboration. No email attachments required!</p>
              <button className='self-start hover:border-b-1 cursor-pointer text-sm'>See how Fylo works</button>
            </div>
          </div>

          {/* card */}
          
            <Card/>



          

        </section>


        
      </div>
      {/* footer */}
      <Footer />
      
    </>
  )
}

export default App
