'use client';

import { Blinker } from 'next/font/google';
import Nav from './Components/nav';
import Page1 from './page1';
import Page3 from './page3';
// import ourTeam from './ourTeam';
import Page4 from './page4'
import Page2 from './page2';
import Page5 from './page5'
import Blob from './blob';
import Footer from './Components/footer'

import { useEffect } from 'react';


import Form from './Form/page'







const blinker = Blinker({
  subsets: ['latin'],
  weight: '400', 
});

const Page = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
 
  return (
    <>

      {/* <Form/> */}

      <div className="main">
        

        <Blob/>
        <Nav/>
        <Page1 className={blinker.className}/>
        <Page2/>
        <Page3/>

        <Page5/>
        <Page4/>
        
        <Footer/>

      </div>
    </>
  )
}

export default Page;