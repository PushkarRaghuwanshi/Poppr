'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Blinker } from 'next/font/google';

const blinker = Blinker({
  subsets: ['latin'],
  weight: '700',
  // display: 'swap',
});

gsap.registerPlugin(ScrollTrigger);

const page4 = () => {


  // useEffect(() => {
  //   const typeSplit = new SplitType('.page4 h1', {
  //     types: 'lines, words, chars',
  //     tagName: 'pan',
  //   });

  //   const chars = typeSplit.chars;

  //   const tl = gsap.timeline({
  //     onComplete: () => {
  //       typeSplit.revert();
  //     },
  //   });

  //   tl.staggerFrom(chars, 0.55, {
  //     opacity: 0,
  //     y: 100,
  //     stagger: { from: 'center', amount: 0.22 },
  //     ease: 'back.out(4)',
  //   });

  //   ScrollTrigger.create({
  //     trigger: '.h1-page4',
  //     start: '-300px center',
  //     end: '100px center',
  //     scrub: true,
  //     // markers: true,
  //     animation: tl,
  //     scrub: 3
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //     typeSplit.revert();
  //   };
  // }, []);


  return (
    <>
      <section>
        <div className={`page4 max-[900px]:text-6xl text-white text-9xl max-[620px]:pb-10 md:px-40 px-4 flex flex-col items-center justify-center relative`}>
          <h1 className='h1-page4  text-center text-5xl md:text-9xl '>let's make</h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-60'>
            <h1 className='text-4xl md:text-9xl '>great work </h1>
            <button className="main-btn overflow-hidden m-6  max-[1000px]:-ml-48 max-[1100px]:-ml-48 max-[900px]:-ml-60 hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-10 text-black bg-yellow-200 rounded-full group">
              <span className="transition z-50 text-center  w-[7rem]  inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">Get in touch</span>
              <br />
              <span className="absolute z-50 -ml-10 transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">Get in touch</span>

              <div className='flex items-center justify-center mt-28 ml-14 absolute'>
                  <div id="an-cir1" className="z-1 h-44 transition ease-in duration-500 ml-2 rounded-full absolute w-44 bg-[#9d6cff] anim-circle"></div>
                  <div id="an-cir2" className="h-36 ml-2 transition ease-in duration-500 rounded-full absolute w-36 bg-sky-400 anim-cirlce"></div>
                  <div id="an-cir3" className="z-2 h-24 transition ease-in duration-500 ml-2 rounded-full absolute w-24 bg-yellow-200  anim-cirlce"></div>
              </div>


            </button>
          </div>
          <h1 className='text-center text-5xl md:text-9xl'>together</h1>
          <button className="m-6 inline-block md:hidden text-xs md:text-sm font-bold px-8 py-4 mr-10 text-black bg-yellow-200 rounded-full">
            <span>Get in touch</span>

            
          </button>
        </div>
      </section>


    </>
  )
}

export default page4
