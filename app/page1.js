'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Blinker } from 'next/font/google';
gsap.registerPlugin(ScrollTrigger);
// import Blob from './blob';
import Img from './Components/assets/images/arrow-up.svg';
// import ScrollLink from 'next-scroll-to';
import Link from 'next/link';
// import { ScrollLink } from 'next-scroll-to';

const blinker = Blinker({
  subsets: ['latin'],
  weight: '800',
  // display: 'swap',
});

const page1 = () => {
  useEffect(() => {
    const typeSplit = new SplitType('.content h1', {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    gsap.from('h1 .char', {
      // letterSpacing:'2rem',
      x: 150,
      opacity: 0,
      duration: 0.65,
      ease: 'bounce.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '',
        start: 'top center',
      },
    });



  }, []);

  const handleScrollClick = () => {
    window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' });
  };

  const CircleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight * 1.85, behavior: 'smooth' });
  };

  const [isHovered, setIsHovered] = useState(false);


  return (
    <>

      <section className=''>


        <div className={`page1 h-screen bg-[#1D1D1F] w-full flex items-center justify-center ${blinker.className}`}>

          
          <div onClick={CircleScrollClick}
            className="left-arrow relative max-[750px]:hidden"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="arrow-circle"
              style={{
                transform: isHovered ? 'scale(0.3)' : 'scale(1)',
                backgroundColor: isHovered ? '#A374FF' : 'transparent',
                transition: 'transform 0.6s, background-color 0.6s'
              }}
            >
              <div
                className="arrow"
                style={{
                  transform: isHovered ? 'scale(3)' : 'scale(1)',
                  transition: 'transform 0.5s'
                }}
              >
                <img
                  id="arrow-initial"
                  src={Img.src}
                  alt="scroll down"
                  style={{
                    position: 'relative',
                    top: isHovered ? '15vh' : '3.5vh',
                    transition: 'top 0.5s'
                  }}
                />
                <img
                  className=''
                  id="arrow-after"
                  src={Img.src}
                  alt="scroll down"
                  style={{
                    position: 'relative',
                    top: isHovered ? '-1vh' : '-7vh',
                    transition: 'top 0.5s'
                  }}
                />
              </div>
            </div>
          </div>
         


          <div className="h-3/4 max-[1000px]:hidden mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center   scrollbar-hide p-20">
            <div className="content top-[35%]     max-[1000px]:hidden left-[16vw] leading-10 flex flex-col z-[500] text-white max-[620px]:w-[20rem] max-[1200px]:w-[48rem] max-[1100px]:right-[25rem] absolute">
              <h1 className="text-[7vw] max-[1100px]:text-8xl text-center max-[620px]:text-5xl font-bold">Transforming</h1>
              <div className="flex flex-col  w-[80vw]  h-54 max-[1100px]:h-14  mt-5 items-center   xl:py-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-10">
                <h1 className="through   text-[7vw]">Aspirations into</h1>
               
                <button onClick={handleScrollClick}  className="main-btn m-10 overflow-hidden  hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-10 text-black bg-yellow-200 rounded-full group">
                  <span className="transition z-50 w-[8rem] inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">Discover us</span>
                  <br />
                  <span className="absolute z-50  -ml-8  text-center transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">Discover us</span>

                  <div className='flex items-center justify-center mt-28 ml-14 absolute'>
                  <div id="an-cir1" className="z-1 h-44 transition ease-in duration-500 ml-2 rounded-full absolute w-44 bg-[#9d6cff] anim-circle"></div>
                  <div id="an-cir2" className="h-36 ml-2 transition ease-in duration-500 rounded-full absolute w-36 bg-sky-400 anim-cirlce"></div>
                  <div id="an-cir3" className="z-2 h-24 transition ease-in duration-500 ml-2 rounded-full absolute w-24 bg-yellow-200  anim-cirlce"></div>
                </div>

                </button>
                
              </div>
              <h1 className="text-[7vw]  w-full  ml- mt-2 pt-3 max-[620px]:ml-0 text-center max-[1100px]:text-8xl max-[620px]:text-5xl leading-8 font-bold">Achievements</h1>
              <button className="my-6 mx-12 px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 text-black bg-yellow-200 rounded-full">
                Discover what we do
              </button>
            </div>
            <div className="p-2 px-40">
              <div className="container noselect  overflow-hidden">
                <div className="canvas">
                  <div className="tracker tr-1"></div>
                  <div className="tracker tr-2"></div>
                  <div className="tracker tr-3"></div>
                  <div className="tracker tr-4"></div>
                  <div className="tracker tr-5"></div>
                  <div className="tracker tr-6"></div>
                  <div className="tracker tr-7"></div>
                  <div className="tracker tr-8"></div>
                  <div className="tracker tr-9"></div>
                  <div className="tracker tr-10"></div>
                  <div className="tracker tr-11"></div>
                  <div className="tracker tr-12"></div>
                  <div className="tracker tr-13"></div>
                  <div className="tracker tr-14"></div>
                  <div className="tracker tr-15"></div>
                  <div className="tracker tr-16"></div>
                  <div className="tracker tr-17"></div>
                  <div className="tracker tr-18"></div>
                  <div className="tracker tr-19"></div>
                  <div className="tracker tr-20"></div>
                  <div className="tracker tr-21"></div>
                  <div className="tracker tr-22"></div>
                  <div className="tracker tr-23"></div>
                  <div className="tracker tr-24"></div>
                  <div className="tracker tr-25"></div>
                  <div id="card">
                    <div className="title">
                      <video className="object-cover rounded-3xl" autoPlay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29"></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-circle fixed left-[-20rem] top-[25rem] w-full max-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-[1000px]:flex max-[1000px]:flex-col"></div>
          </div>


          <div className="h-3/4 hidden overflow-y-hidden max-[1000px]:block  mt-32 max-[620px]:mt-0 w-1/2 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-0 max-[620px]:pt-20  items-center justify-center">
           <div className='m-auto w-full  bg-red-500'>

           {/* <div className="  max-[620px]:mt-32  max-[768px]:ml-[2vw] max-[620px]:ml-[18vw]  max-[520px]:ml-[12vw]  max-[1000px]:mr-[10rem]    md:left-16 flex flex-col items-center justify-center font-extrabold text-white max-[770px]:w-[18rem]  w-[40rem] max-[1000px]:mt-[8rem] absolute"> */}
           <div className="  w-[100%] top-[35%] left-0 flex flex-col items-center justify-center font-extrabold text-white absolute">

              <h1 className="text-[7vw]    text-center max-[620px]:text-5xl leading-3 font-bold">Transforming</h1>

              <div className="flex flex-col items-center pt-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                <h1 className="text-5xl md:text-[7vw] md:ml-20">Aspirations into </h1>
                <Link href="#discover" scroll={true}>
                <button className="m-12 max-[1020px]:w-[15rem] hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full max-[620px]:text-xs max-[620px]:px-4 max-[620px]:py-2">
                  Discover us
                </button>
                </Link>
                
              </div>

              <h1 className="text-[7vw]  ml-32 max-[620px]:ml-0 max-[770px]:mr-32 max-[620px]:mr-1 max-[620px]:text-5xl leading-10 font-bold">Achievements</h1>
              {/* <h1 className="text-9xl bg-red-200 max-[620px]:text-5xl w-[55rem] leading-8 max-[620px]:text-center text-right font-bold">immersion</h1> */}
              
              <button onClick={handleScrollClick} className="my-6 mx-12 px-8 py-4 mr-20 text-black bg-yellow-200 rounded-full hidden max-[767px]:block max-[770px]:mx-4 max-[620px]:mx-2 max-[620px]:text-xs max-[620px]:px-4 max-[620px]:py-2">
                Discover us
              </button>

            </div>
           </div>
            <video className="object-cover h-full max-[1000px]:h-3/4 max-[770px]:h-3/4 max-[770px]:w-full  max-[620px]:h-full  w-full  rounded-3xl" autoPlay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29">
            </video>


          </div>
        </div>
      </section>


    </>
  )
}

export default page1