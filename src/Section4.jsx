import './App.css'
import FadeIn from './FadeIn'
import { useState} from 'react'
import typing_gif from '/typing.gif'
import github_logo from '/github-logo.png'
import s3static from '/s3staticweb.png'
import colmar from '/colmar.png'
import green_sculpt from '/green_sculpt.png'
import react_assessment from '/react_assessment.png'

const Section4 = () => {
    
    const [imageSrc, setImageSrc] = useState(typing_gif);
    
    return (
        <div className="bg-[#001833] bg-fixed bg-no-repeat bg-cover h-[1000px] md:h-[650px] w-screen" id='project'>
        <section className={`font-poppins container mx-auto`}>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 py-10 md:py-20 pl-5 pr-5 md:pl-0 md:pr-10'>
              <div className='text-white mb-10'>
                  <FadeIn offset={1500} delay={300}>
                    <h3 className='font-medium text-4xl mb-10'>My Project</h3>
                  </FadeIn>
                  <FadeIn offset={1500} delay={600}>
                    <img src={imageSrc} alt="project_pic" className='object-cover h-96 w-full transition-all ease-in duration-300' />
                  </FadeIn>
              </div>
            </div>
              <div className='w-full md:w-1/2 md:py-[150px] pl-5 pr-5 md:pl-0 md:pr-10'>
                  <div className='text-white text-xl md:pl-20 flex flex-col items-center md:items-start'>
                  <FadeIn offset={1500} delay={900}>
                    <p className="cursor-pointer" onMouseEnter={() => setImageSrc(green_sculpt)} onMouseLeave={() => setImageSrc(typing_gif)}>• Greensculpt Workout App</p>
                      <div className='flex gap-5 mt-2 ml-4 mb-4'>
                      <a href='' target='_blank'><button className='btn btn-sm'><span className="material-symbols-outlined">link</span>Link</button></a>
                      <a href='https://github.com/Marakarn/Corgi-Milkshake-Final-Project' target='_blank'><button className='btn btn-sm'><img className='w-5' src={github_logo} />github</button></a>
                      </div>
                    <p className="cursor-pointer" onMouseEnter={() => setImageSrc(react_assessment)} onMouseLeave={() => setImageSrc(typing_gif)}>• React Assessment</p>
                    <div className='flex gap-5 mt-2 ml-4 mb-4'>
                      <a href='https://27-suttikarn-react-assessment-alpha.vercel.app/' target='_blank'><button className='btn btn-sm'><span className="material-symbols-outlined">link</span>Link</button></a>
                      <a href='https://github.com/Marakarn/career-changer-react-assessment' target='_blank'><button className='btn btn-sm'><img className='w-5' src={github_logo} />github</button></a>
                      </div>
                    <p className="cursor-pointer" onMouseEnter={() => setImageSrc(colmar)} onMouseLeave={() => setImageSrc(typing_gif)}>• Colmar academy Assessment</p>
                    <div className='flex gap-5 mt-2 ml-4 mb-4'>
                      <a href='https://27-karn-colmar.vercel.app/' target='_blank'><button className='btn btn-sm'><span className="material-symbols-outlined">link</span>Link</button></a>
                      <a href='https://github.com/Marakarn/27-karn-colmar' target='_blank'><button className='btn btn-sm'><img className='w-5' src={github_logo} />github</button></a>
                      </div>
                    <p className="cursor-pointer" onMouseEnter={() => setImageSrc(s3static)} onMouseLeave={() => setImageSrc(typing_gif)}>• Static Website On Amazon S3 (My first web)</p>
                    <div className='flex gap-5 mt-2 ml-4 mb-4'>
                      <a href='https://htmls3suttikarn1.s3.ap-southeast-1.amazonaws.com/SuttikarnResume.html' target='_blank'><button className='btn btn-sm'><span className="material-symbols-outlined">link</span>Link</button></a>
                      <a href='' target='_blank'><button className='btn btn-sm'><img className='w-5' src={github_logo} />github</button></a>
                      </div>
                    </FadeIn>
                  </div>
              </div>
        </div>
        </section>
      </div>
    )
}

export default Section4