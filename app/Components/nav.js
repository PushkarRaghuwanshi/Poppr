'use client';

import React, { useState, useEffect } from 'react';
import logo from './assets/logo_Marine-Vista.png'
import { gsap } from 'gsap';
import Header from './header';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const animateLetters = () => {
        gsap.from('.nav2-left p', {
          y: 200,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'power4.out',
        });
        gsap.fromTo(
          '.menu-elem h2',
          {
            x: 300,
            opacity: 0,
            letterSpacing: 5,
          },
          {
            x: 0,
            opacity: 1,
            letterSpacing: 0,
            duration: 1,
            stagger: 0.05,
            ease: 'bounce.out',
          }
        );
      };

      gsap.to('.nav2', {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: animateLetters,
      });
    } else {
      gsap.to('.nav2', {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (formOpen) {
      gsap.fromTo(".MainForm", 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 } 
      );
    } else {
      gsap.to(".MainForm", {
        y: 20,
        scale: 0, 
        opacity: 0, 
        duration: 0.5, 
        ease: "power2.in",
        onComplete: () => {
          gsap.set(".MainForm", { display: "none" });
        }
      });
    }
  }, [formOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <Header />
      <nav className="w-full fixed z-[900]">
        <section>
          <div>
            <nav
              className={`nav1 z-[901] ${menuOpen
                ? 'bg-white transition-colors delay-200 duration-500'
                : 'bg-[#1D1D1F] transition-colors delay-500 duration-500'
                } max-[620px]:border-none border-transparent z-20 absolute w-full flex justify-between p-3 px-10 max-[620px]:px-4`}
            >
              <img className='h-14 w-14 rounded-full'  src={logo.src} alt="" />

              <div className="">

                <button
                  className={`${menuOpen
                    ? 'opacity-0 transition delay-1000 duration-500'
                    : 'opacity-1 transition delay-1000 duration-500'
                    } main-btn overflow-hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-5 bg-transparent text-white border-2 border-[#9d6cff] rounded-full group`}
                  onClick={toggleForm}
                >
                  <span className="span -mt-[.2]"></span>
                  <span className="span top-[3.2rem]"></span>
                  <span className="span"></span>
                  <span className="transition inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">
                    Get in touch
                  </span>
                  <br />
                  <span className="absolute -ml-10 transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">
                    Get in touch
                  </span>
                </button>

                <i
                  className={`menu rounded-full max-[620px]:ml-2 text-white max-[620px]:text-xl bg-[#9d6cff] p-4 text-2xl cursor-pointer ${menuOpen ? 'ri-close-circle-line' : 'ri-menu-line'
                    }`}
                  onClick={toggleMenu}
                ></i>
              </div>
            </nav>

            <nav
              className={`nav2 absolute z-[99] w-full transition-transform duration-100 ease-in-out ${menuOpen ? 'transformtranslate-y-0' : 'transform -translate-y-full'
                }`}
            >
              <div className="flex flex-col-reverse lg:flex-row items-start h-screen lg:justify-between px-10 bg-white">
                <div className={`nav2-left z-[1000] mt-5 lg:mt-96 ${menuOpen
                 ? 'opacity-1 transition delay-1000 duration-500'
                  : 'opacity-0 transition delay-1000 duration-500'
                  } `}>
                  <p className="text-s font-bold text-[#9d6cff] mt-0 lg:mt-20">
                    Get in Touch
                  </p>
                  <p className="text-4xl mt-4">hello@poppr.be</p>
                  <p className="text-4xl mb-4">+32 (0)9 335 33 33</p>
                  <p className="text-xl">Stapelplein 70/303</p>
                  <p className="text-xl">9000 Ghent</p>
                </div>
                <div
                  id="offering"
                  className={`menu-elem ${menuOpen
                   ? 'opacity-1 transition delay-1000 duration-500'
                    : 'opacity-0 transition delay-1000 duration-500'
                    } z-30 mt- lg:mt-20 mr-0 lg:mr-36 text-6xl font-semibold lg:text-8xl tracking-[10px] font-serif`}
                >
                  <h2 className="">work</h2>
                  <h2 className="">solutions</h2>
                  <h2 className="">about us</h2>
                  <h2 className="">insights</h2>
                  <h2 className="">careers</h2>
                  <h2 className="">contact</h2>
                </div>
              </div>
              <div
                className={`w-full rotate-180  z-[1000] ${menuOpen
                  ? 'h-[20vw]'
                   : 'h-[10vw]'
                   } transition-all ease-in-out delay-500 duration-500 rounded-b-full `}
              >
                <svg className='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,192L120,170.7C240,149,480,107,720,106.7C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
              </div>
            </nav>
          </div>
        </section>
      </nav>

      {formOpen && (
       <div className='MainForm z-[1000]  fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
       <div className='flex max-[850px]:flex-col relative h-full max-h-[35rem]  bg-[#1D1D1F] max-w-[70vw] max-[850px]:w-[25rem]'>
         <div className='formImg  w-1/2  max-[850px]:w-full bg-red-100 max-[850px]:object-contain max-[850px]:h-[20vw] bg-cover bg-center'>
           <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1664124381898-5f79552b408d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="z-[999] w-1/2 max-[850px]:w-full   form-container  from-[#212121] to-[#212121] bg-padding border-2 border-transparent p-8 text-sm font-inherit text-white flex flex-col gap-5 box-border rounded-lg bg-[length:200%_100%] animate-gradient">
           <form className="form my-10 w-full flex flex-col gap-5">
             <i onClick={toggleForm} className="z-50 close-icons ri-close-circle-fill  text-3xl p-5 text-[#9d6cff] absolute right-0 top-0"></i>
             <div className="form-group flex flex-col gap-1">
               <h1 htmlFor="name" className="">Name</h1>
               <input required name="name" id="name" placeholder='Enter Your Name' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
             </div>
             <div className="form-group flex flex-col py-5 max-[620px]:py-0  gap-1">
               <h1 htmlFor="email" className="">Email</h1>
               <input required name="email" id="email" placeholder='Enter Your Email' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
             </div>
             <div className="form-group flex flex-col gap-1">
               <h1 htmlFor="phone" className="">Phone Number</h1>
               <input required name="phone" id="phone" placeholder='Enter Your Mobile Number' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
             </div>
             <button type="submit" className="form-submit-btn flex items-start justify-center self-start font-inherit text-white font-semibold w-2/5 bg-[#313131] border border-[#414141] p-3.5 text-inherit gap-2 mt-2 cursor-pointer rounded-md hover:bg-[#9d6cff] hover:text-white transition-all ease-in-out">Submit</button>
           </form>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default Nav;