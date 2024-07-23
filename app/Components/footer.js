'use client'
import React from 'react'
import Header from './header'
import { useEffect } from 'react';
// import { useState } from 'react';
import { Blinker } from 'next/font/google';
// import Owl from './assets/images/owl.webp';
// import Anchor from './assets/images/anch'
import Wheel from './assets/images/Wheel.png'
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const blinker = Blinker({
  subsets: ['latin'],
  weight: '800',
  // display: 'swap',
});




const footer = () => {



  useEffect(() => {
    gsap.fromTo(
      'footer',
      { scaleY: 0, transformOrigin: 'center' },
      {
        scaleY: 1,
        duration: 2,
        borderRadius: 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: 'footer',
          start: '-1100px top',
          end: '-500px end',
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.to('.owl img', {
      y: '-15%',
      rotationX: 360,
      duration: 2.4,

      ease: 'bounce.inOut',
      stagger: 0.1,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
        end: 'end center',
        scrub: 5,
        // markers: true,
      },
    });
  }, []);




  return (
    <footer id='' className={`bg-[#9d6cff] mt-40 max-[620px]:mt-1 rounded-t-[50%] `}>
      {/* <div className='w-full h-[100%] bg-red-300 -top-52 absolute rounded-t-[50%]'></div> */}
      {/* <Header />
      <svg className='absolute -top-52 z-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,106.7C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      <div className="top flex mt-20 flex-col max-[1000px]:gap-10 items-center md:flex-row justify-between p-8 md:p-28 px-4 ">
        
        <div className="left mb-10 md:mb-0 text-center md:text-left">
          <h4 className="font-bold text-xs">STAY UP TO DATE</h4>
          <h1 className={`text-4xl md:text-7xl font-bold pb-10 ${blinker.className}`}>
            get our <br /> newsletter
          </h1>
          <div className="">
            <div className="p-5">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                <div className="group w-full md:w-auto">
                  <input
                    required=""
                    type="text"
                    className="input w-full md:w-auto"
                    placeholder="Your Email"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label className="hidden md:block">Your Email</label>
                </div>
                <button className="Btn mt-4 md:mt-0">
                  <i className="svgIcon ri-arrow-left-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="owl z-10 mb-10 max-[1150px]:hidden  md:mb-0">
          <img className="h-80 w-80 mx-auto" src={Wheel.src} alt="owl" />
          <div className="eyes flex justify-center mt-4">
            <div id="left-eye" className="eye mr-2">
              <div className="ball"></div>
            </div>
            <div id="right-eye" className="eye ml-2">
              <div className="ball"></div>
            </div>
          </div>
        </div>

        <div className="right-footer text-center md:text-left">
          <div className={`${roboto.className}`}>
            <p className="text-s text-white">
              <span className='hover-underline-animation'>Get in Touch</span>
            </p>
            <p className="text-2xl md:text-4xl mt-4">
              <span className='hover-underline-animation'>hello@poppr.be</span>
            </p>
            <p className="text-2xl md:text-4xl mb-4">
              <span className='hover-underline-animation'>+32 (0)9 335 33 33</span>
            </p>
            <p className="text-xl">
              <span className='hover-underline-animation'>Stapelplein 70/303</span>
            </p>
            <p className="text-xl">
              <span className='hover-underline-animation'>9000 Ghent</span>
            </p>
          </div>

        </div>
      </div>


      <div className="bottomfooter flex flex-col lg:flex-row items-center px-4 md:px-10 py-8 border-t-2 border-gray-300 mx-4 md:mx-10 gap-5">
      <div className="left w-full lg-flex-col   lg:w-1/2 mb-4 md:mb-">
        <div className="flex flex-col  sm:flex-row text-xs pt-4  font-bold justify-between items-center px-2 md:px-0 gap-2 sm:gap-0">
          <h4>PRIVACY POLICY</h4>
          <h4>DISCLAIMER</h4>
          <h4>TERMS AND CONDITIONS</h4>
          <h4>BE081 0005 745</h4>
        </div>
      </div>

  <div className="right w-full md:w-1/2">
    <div className="flex flex-col lg:flex-row   text-sm font-bold justify-between items-center font-mono px-2 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-4   mb-4 md:mb-0 px-4 ">
        <h4 className="mb-2 md:mb-0 w-44 text-center">SEE WHAT WE'RE UP TO</h4>
        <div className="icons text-xl flex gap-4 md:gap-5 text-white">
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-linkedin-box-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-youtube-fill"></i>
        </div>
      </div>
      <div className="flex gap-4 md:gap-5">
        <h4 className="text-black hover:text-white transition-all">NEDERLANDS</h4>
        <h4>ENGLISH</h4>
      </div>
    </div>
  </div>
</div>



    </footer>

  )
}

export default footer
