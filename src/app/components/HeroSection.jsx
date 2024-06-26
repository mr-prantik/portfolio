"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello I&apos;m{" "} </span><br></br>
                    <TypeAnimation
                        sequence={[
                            'Prantik',
                            1000, 
                            'A Web Developer',
                            1000,
                            'A Competitive Programmer',                            
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    As a third- year student, I am a fast learner who is passionate about keeping up with the latest technologies. I am well-versed in DSA and OOP concepts. Recently, I have also become
                    proficient in back- end development technologies. I am excited to continue expanding my
                    skills and knowledge in the field and  eager to take on any new challenges that come
                    my way.
                </p>

                <div>
                    
                    <a href='#contact'>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire me</button>
                    </a>
                    <a href='https://drive.google.com/file/d/1GQgG2qcuJDb7ikpI9l9I-H3zuZhJZ5qJ/view?usp=sharing'>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  text-white  mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </a>
                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                        src="/images/hero-image.png"
                        alt="hero image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>      
    </section>
  )
}

export default HeroSection
