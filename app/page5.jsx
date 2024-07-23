'use client'
import react from 'react';
import { Roboto, NotoSans } from 'next/font/google';
import gsap from 'gsap';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const page5 = () => {



  return (
    <>
      <section className={`page3  overflow-hidden relative text-white py-20 ${roboto.className}`}>
        <h5 className="text-center text-2xl font-bold py-">Our Team</h5>



        <div className="gallery   flex h-[70vh] max-[620px]:h-[40vh] w-[100vw]  mt-10 justify-center items-center    lg:gap-4">
          <div className='img1 relative w-[10vw] h-full border-2 border-[#1D1D1F]   hover:w-1/3 md:hover:w-1/2 lg:hover:w-1/4 '>
          <img className="absolute h-full bg-red-100 w-full object-cover" src="https://images.unsplash.com/photo-1578404096094-4ca3ae40873a?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         
            <h1 className='z-[1000] text-white bottom-5 py-2 max-[720px]:py-0 opacity-0 md:text-4xl lg:text-4xl xl:text-3xl absolute px-4'>Vikram Rathore</h1>
            <h1 className='z-[1000] text-white bottom-0 md:text-xl lg:text-xl xl:text-xl opacity-0 absolute px-4'>Colonel</h1>  
        

          </div>

          <div className='img1 relative w-[10vw] h-full border-2 border-[#1D1D1F]   hover:w-1/3 md:hover:w-1/2 lg:hover:w-1/4 '>
          <img className="absolute h-full bg-red-100 w-full object-cover" src="https://images.unsplash.com/photo-1576669421254-0a039e301587?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         
            <h1 className='z-[1000] text-white bottom-5 py-2 max-[720px]:py-0 opacity-0 md:text-4xl lg:text-4xl xl:text-3xl absolute px-4'>Vikram Rathore</h1>
            <h1 className='z-[1000] text-white bottom-0 md:text-xl lg:text-xl xl:text-xl opacity-0 absolute px-4'>Colonel</h1>  
        

          </div>

          <div className='img1 relative w-[10vw] h-full border-2 border-[#1D1D1F]   hover:w-1/3 md:hover:w-1/2 lg:hover:w-1/4 '>
          <img className="absolute h-full bg-red-100 w-full object-cover" src="https://images.unsplash.com/photo-1579698543074-a18d65bff58f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         
            <h1 className='z-[1000] text-white bottom-5 py-2 max-[720px]:py-0 opacity-0 md:text-4xl lg:text-4xl xl:text-3xl absolute px-4'>Vikram Rathore</h1>
            <h1 className='z-[1000] text-white bottom-0 md:text-xl lg:text-xl xl:text-xl opacity-0 absolute px-4'>Colonel</h1>  
        

          </div>

          <div className='img1 relative w-[10vw] h-full border-2 border-[#1D1D1F]   hover:w-1/3 md:hover:w-1/2 lg:hover:w-1/4 '>
          <img className="absolute h-full bg-red-100 w-full object-cover" src="https://images.unsplash.com/photo-1575528941322-c74397246f19?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         
            <h1 className='z-[1000] text-white bottom-5 py-2 max-[720px]:py-0 opacity-0 md:text-4xl lg:text-4xl xl:text-3xl absolute px-4'>Vikram Rathore</h1>
            <h1 className='z-[1000] text-white bottom-0 md:text-xl lg:text-xl xl:text-xl opacity-0 absolute px-4'>Colonel</h1>  
        

          </div>

          <div className='img1 relative w-[10vw] h-full border-2 border-[#1D1D1F]   hover:w-1/3 md:hover:w-1/2 lg:hover:w-1/4 '>
          <img className="absolute h-full bg-red-100 w-full object-cover" src="https://images.unsplash.com/photo-1576423596782-8c5478efd11f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         
            <h1 className='z-[1000] text-white bottom-5 py-2 max-[720px]:py-0 opacity-0 md:text-4xl lg:text-4xl xl:text-3xl absolute px-4'>Vikram Rathore</h1>
            <h1 className='z-[1000] text-white bottom-0 md:text-xl lg:text-xl xl:text-xl opacity-0 absolute px-4'>Colonel</h1>  
        

          </div>


        

          

         
          
        </div>
      </section>
    </>
  )
}

export default page5
