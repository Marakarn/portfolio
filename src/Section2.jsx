import './App.css'
import { useState} from 'react'
import DisplayAboutMe from './DisplayAboutMe'
import FadeIn from './FadeIn'
import aboutMePic from '/Mikazuki.gif'


const Section2 = () => {
    
    const handleClick = (value) => {
        setSection(value);
      };

    const [section, setSection] = useState("Profile");

    return (
      <div className="bg-[#001833] bg-fixed bg-no-repeat bg-cover h-[1200px] md:h-[700px] w-screen" id='about'>
      <section className={`font-poppins container mx-auto`}>
        <div className='flex h-[600px] flex-col md:flex-row'>
          <div className='w-full md:w-1/2 py-10 md:py-20 pl-5 pr-5 md:pl-0 md:pr-10'>
            <div>
              <div className="lg:flex justify-between text-white mb-10">
              <FadeIn offset={400} delay={300}>
                <h3 className='font-medium text-4xl'>About me</h3>
              </FadeIn>
              <FadeIn offset={400} delay={600}>
                <div className='flex gap-6 mt-5 lg:mt-0'>
                  <a href='https://www.linkedin.com/in/suttikarn-suranan-a53537200' target='_blank'><img className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' src="/linkedin-icon.svg" alt="linkedin_icon" /></a>
                  <a href='https://www.facebook.com/suttikarn.suranan' target='_blank'><img src="/fb-icon.svg" className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' alt="fb-icon" /></a>
                  <a href='https://www.instagram.com/karn.ner_z/' target='_blank'><img src="/ig-icon.svg" className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' alt="ig-icon" /></a>
                </div>
              </FadeIn>
              </div>
              <FadeIn offset={400} delay={900}>
                <img src={aboutMePic} alt="About_me_pic" className='object-cover h-96 w-full' />
              </FadeIn>
              </div>
          </div>
          <div className='w-full md:w-1/2 md:py-20 pl-10 pr-5 md:pr-0'>
            <div className='text-white'>
              <FadeIn offset={400} delay={1200}>
                <h2 className='text-3xl md:text-5xl xl:text-6xl font-normal'>Suttikarn Suranan</h2>
              </FadeIn>
              <FadeIn offset={400} delay={1500}>
                <div className='flex gap-6 text-2xl mt-10'>
                  <button onClick={() => handleClick("Profile")} className="hover:-translate-y-1 ease-in-out duration-300 border-solid border-b-2">Profile</button>
                  <button onClick={() => handleClick("Education")} className="hover:-translate-y-1 ease-in-out duration-300 border-solid border-b-2">Education</button>
                </div>
              </FadeIn>
              <div className='mt-10'>
                <FadeIn offset={400} delay={1800}>
                  <DisplayAboutMe section={section} />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Section2