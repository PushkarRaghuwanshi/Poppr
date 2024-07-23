'use client'
import { NextPage } from 'next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Blob from '../blob';

const Form = () => {

    useEffect(() => {
        gsap.fromTo(".form-container", 
            { y: "-150%" }, // Start from off the top of the screen
            { y: "0%", duration: 2, ease: "power3.inOut" } // Move to its final position smoothly
        );
    }, []);

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center overflow-hidden'>
                 {/* <div className='z-[1000] popUp w-screen h-screen bg-[#9d6cff] absolute'></div> */}
                <div className="z-[999] form-container bg-gradient-to-r from-[#212121] to-[#212121] bg-padding border-2 border-transparent p-8 text-sm font-inherit text-white flex flex-col gap-5 box-border rounded-lg bg-[length:200%_100%] animate-gradient">
                    <form className="form flex flex-col gap-5">
                        <div className="form-group flex flex-col gap-1">
                            <h1 htmlFor="name" className="">Name</h1>
                            <input required name="name" id="name" placeholder='Enter Your Name' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
                        </div>
                        <div className="form-group flex flex-col gap-1">
                            <h1 htmlFor="email" className="">Email</h1>
                            <input required name="email" id="email" placeholder='Enter Your Email' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
                        </div>
                        <div className="form-group flex flex-col gap-1">
                            <h1 htmlFor="phone" className="">Phone Number</h1>
                            <input required name="phone" id="phone" placeholder='Enter Your Mobile Number' type="text" className="w-full p-3.5 rounded-md text-white font-inherit bg-transparent border border-[#414141] focus:outline-none focus:border-[#e81cff] placeholder-opacity-50" />
                        </div>
                        <button type="submit" className="form-submit-btn flex items-start justify-center self-start font-inherit text-[#717171] font-semibold w-2/5 bg-[#313131] border border-[#414141] p-3.5 text-inherit gap-2 mt-2 cursor-pointer rounded-md hover:bg-[#9d6cff] hover:text-white transition-all ease-in-out">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;
