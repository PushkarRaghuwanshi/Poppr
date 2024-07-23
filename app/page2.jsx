'use client'
import { Roboto, NotoSans } from 'next/font/google';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const roboto = Roboto({ subsets: ['latin'], weight: '400' });


const page2 = () => {
   

    const cards = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1718114885158-a3157f5fc443?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1719401542237-a36c227d9833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 4,
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664461664321-c9b95d47f0a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },
        {
            id: 7,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },
       
        
        
    ];
    

    useEffect(() => {
        const matchMedia = window.matchMedia("(min-width: 620px)");

        const animateCards = () => {
            gsap.to(".card1-page2", {
                x: -2000,
                scrollTrigger: {
                    trigger: ".scroller",
                    start: "top 600px",
                    end: "bottom end",
                    scrub: 5,
                    // markers: true,
                    // onLeave: () => gsap.to(".card1-page2", { x: 0 }), 
                }
            });
        };

        if (matchMedia.matches) {
            animateCards();
        }

        const handleResize = () => {
            if (matchMedia.matches) {
                animateCards();
            } else {
                // Kill the animation if the width is below 620px
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.set(".card1-page2", { x: 0 }); // Ensure position is reset
            }
            ScrollTrigger.refresh(); // Refresh ScrollTrigger to recalculate positions
        };

        matchMedia.addEventListener("change", handleResize);

        // Clean up
        return () => {
            matchMedia.removeEventListener("change", handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    useEffect(() => {
        const rightelem = document.querySelectorAll(".main-container");
    
        rightelem.forEach(function(elem) {
          let cursorElem = elem.querySelector(".drag-cursor"); // Select the image inside the cursor div
    
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
    <>
        <section >
        <div className='page2 overflow-hidden'>
            {/* <div id='discover' className='text-white   relative flex justify-center gap-24   py-40 max-[620px]:my-10 max-[620px]:px-4'>
                <h6 className='text-sm max-[620px]:text-xs  font-bold text-[#a374ff]' >What Are We?</h6>
                <p className={`text-3xl max-[620px]:text-xl text-center md:text-left pb-8 ${roboto.className}`}>
                    Enjoy some of our best work <br />
                    in immersive <span className='text-[#a374ff]'>web</span>, <br />
                    <span className='text-[#17f1d1]'>augmented reality</span> and <span className='text-[#ffd074]'>virtual <br /> reality</span> experiences
                </p>
            </div> */}

<div className="text-white px-20 max-[620px]:px-12 w-full my-20 flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 max-[800px]:py-10 max-[800px]:pt-72 relative">
    <img className="absolute rotate-6 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-80 max-[620px]:h-60 max-[800px]:w-full" src="https://images.unsplash.com/photo-1558256708-bc39e034b935?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="absolute z-10  rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-80 max-[620px]:h-60 max-[800px]:w-full" src="https://images.unsplash.com/photo-1612428978523-a8d7e9e294aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="absolute rotate-12  rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 max-[800px]:w-full h-80 max-[620px]:h-60" src="https://plus.unsplash.com/premium_photo-1680103200092-47d168b2a46c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  <div className="w-full md:w-1/2 py-32 max-[620px]:py-16 md:pr-0 ">
    <p className="text-base md:text-base">
      Marine Vista is an EdTech platform specializing in maritime education, offering expert-led online courses, live classes, and personalized guidance to students aspiring to join the Indian Merchant Navy. With a focus on preparing candidates for IMUCET and sponsorship exams, our meticulously crafted curriculum covers all facets of maritime studies, from navigation to marine engineering, ensuring a holistic understanding of the field.<br /><br />
      Through our advanced online platform, students gain access to live classes, interactive sessions, and personalized mentorship from seasoned professionals hailing from the merchant navy industry. Embark on an enriching journey towards a fulfilling career at sea with Marine Vista, where our commitment to excellence, innovation, and comprehensive support empowers individuals to achieve their maritime ambitions, whether aiming to navigate the seas as a deck officer, engineer, or pursue a career in maritime management.
    </p>
  </div>
</div>
 


            <div className='main-container'>

            <div className="drag-cursor relative transition duration-300 ease-linear  bg-[#a374ff] text-white max-[620px]:hidden h-28 w-28 flex items-center justify-center opacity-0  rounded-full p-4">
                    <span className="text-center">Drag <br/> or <br /> Click</span>
            </div>
            <div id='Scroller' className="scroller w-[]   transition-all ease-in-out duration-500  rotate-6  scale-105 pl-[80rem] max-[620px]:pl-0 relative max-[620px]:rotate-0 max-[620px]:gap-20 max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center max-[620px]:justify-center    flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-none">
            
            
            

            {cards.map((card) => (
                <div id='Scroller'  key={card.id} className="card1-page2    mt-5 max-[620px]:flex max-[620px]:flex-col   max-[620px]:w[20rem] max-[620px]:h-[25rem]   h-[33rem] relative">
                    <div className='card w-[35rem] max-[620px]:w-[20rem] rounded-2xl   overflow-hidden relative'>
                    <div className="drag-cursor bg-[#a374ff] text-white max-[620px]:hidden h-28 w-28 flex items-center justify-center opacity-0  absolute rounded-full z-10 p-4">
                    <span className="text-center">Drag <br/> or <br /> Click</span>
                    </div>
                        <div className='h-40 w-40 hidden absolute z-10 rounded-full'>
                            
                        </div>
                        <img className='h-[27rem] w-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                             src={card.imageUrl}
                             alt={card.title} />
                    </div>

                    <div className="content-page2 max-[620px]:rotate-0 flex -rotate-6 flex-col mt-10 px-5 max-[620px]:px-0 text-white md:absolute sm:relative top-72  max-[620px]:w-[20rem] mx-auto" >
                    <h3 className="text-xl sm:text-2xl md:text-3xl">{card.description}</h3>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold py-2">{card.title}</h1>
                    <h5 className="text-xs sm:text-sm md:text-base font-semibold">{card.category}</h5>
                    </div>

                </div>
            ))}
         

        

            </div>

          

            </div>


            <div className="    z-[1000] max-[620px]:mt-20  max-[620px]:py-6 max-[620px]:px-0 max-[620px]:items-center max-[620px]:justify-center flex px-40 ">
            <button className=" main-btn m-6  overflow-hidden   md:inline-block text-sm font-bold px-8 py-4 md:mr-10 border-2 border-[#9d6cff] bg-transparent text-white rounded-full group">
            <span className='span -mt-[.2]'></span>
            {/* <span className='span '></span> */}
            <span className='span top-[3.2rem]'></span>
            <span className='span'></span>
              <span className="transition w-[12rem] inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">Discover Our App</span>
              <br />
              <span className="absolute w-[12rem] -ml-24 transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">Discover Our App</span>
            </button>
            </div>
        
        </div>
        </section>

        

    </>
  )
}

export default page2
