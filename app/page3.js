'use client';
import React, { useEffect } from 'react';
import { Roboto, NotoSans } from 'next/font/google';
import gsap from 'gsap'; 

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const Page3 = () => {

  useEffect(() => {
    const rightelem = document.querySelectorAll(".card1");

    rightelem.forEach(function(elem) {
      let cursorElem = elem.querySelector(".cursor img"); // Select the image inside the cursor div

      elem.addEventListener("mouseenter", function() {
        cursorElem.style.opacity = 1;
      });

      elem.addEventListener("mouseleave", function() {
        cursorElem.style.opacity = 0;
      });

      elem.addEventListener("mousemove", function(dets) {
        const rect = elem.getBoundingClientRect();
        gsap.to(cursorElem, {
          x: dets.clientX - rect.left - cursorElem.clientWidth / 2, 
          y: dets.clientY - rect.top - cursorElem.clientHeight / 2 
          
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      rightelem.forEach(elem => {
        elem.removeEventListener("mouseenter", () => {});
        elem.removeEventListener("mouseleave", () => {});
        elem.removeEventListener("mousemove", () => {});
      });
    };
  }, []);
  return (
    <section className={`page3 overflow-hidden relative text-white px-4 lg:px-44 py-10 max-[620px]:py-0 ${roboto.className}`}>
      <h5 className="text-center text-sm font-bold py-20">Transform Your Learning with Our Unique Features</h5>

      <div className="grid grid-cols-1 max-[620px]:flex max-[620px]:flex-col max-[620px]:justify-center  md:grid-cols-2 gap-4 gap-x-16 gap-y-36 max-[620px]:gap-y-10">
        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#17f1d1]">Live & Recorded Training</h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Access live sessions and recorded classes anytime, ensuring flexible and comprehensive learning.
            </h1>
            <div className="main-button">
              <button className="btn btn-1 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1  w-full flex flex-col max-[620px]:py-5">
          <div className="cursor  rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#A374FF]">
            Advance Intelligent Support
            </h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Benefit from AI-driven support that enhances your learning experience with instant assistance and feedback.
            </h1>
            <div className="main-button z-10">
              <button className="btn btn-2 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://example.com/card3.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#FFD074]">Real Mariners Interaction</h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Engage with experienced mariners through interactive sessions, gaining valuable industry insights and practical knowledge
            </h1>
            <div className="main-button">
              <button className="btn btn-3 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719386217659-6bde4641915c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#17F1D1]">
            Industry Certified Trainers
            </h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Learn from certified maritime professionals who bring real-world expertise to every class and training session.
            </h1>
            <div className="main-button">
              <button className="btn btn-4 text-start">Continue reading</button>
            </div>
          </div>
        </div>


         <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://example.com/card3.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#17f1d1]"> Doubt Clearing Sessions</h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Participate in dedicated sessions to resolve your doubts and strengthen your understanding of complex topics.
            </h1>
            <div className="main-button">
              <button className="btn btn-1 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719386217659-6bde4641915c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#A374FF]">
            Reliable Learning Technology
            </h5>
            <h1 className="text-3xl sm:text-3xl py-6">
            Experience seamless learning with our robust, user-friendly platform designed for effective maritime education.
            </h1>
            <div className="main-button">
              <button className="btn btn-2 text-start">Continue reading</button>
            </div>
          </div>
        </div>


      </div>

      <div className="py-24 max-[620px]:py-14 flex items-center justify-center">
      <button className="main-btn overflow-hidden m-6 bg-[#1D1D1F]  md:inline-block text-sm font-bold px-8 py-4 md:mr-10 border-2 border-[#9d6cff] bg-transparent text-white rounded-full group">
                <span className='span -mt-[.2]'></span>
                {/* <span className='span '></span> */}
                <span className='span top-[3.2rem]'></span>
                <span className='span'></span>
              <span className="transition z-50 w-[12rem] inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">Discover more insights</span>
              <br />
              <span className="absolute z-50 w-[12rem] -ml-24 transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">Discover more insights</span>


              
                 
                  
                

      </button>
      </div>
     
    </section>
  );
};

export default Page3;
