import './App.css'
// import { Link } from 'react-router-dom'
import { useState} from 'react'
import FadeIn from './FadeIn'
import FadeIn2 from './FadeIn2'
import DisplayAboutMe from './DisplayAboutMe'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import github_logo from '/github-logo.png'
import s3static from '/s3staticweb.png'
import colmar from '/colmar.png'
import coffee from '/HotCoffee.gif'
import react_assessment from '/react_assessment.png'
import green_sculpt from '/green_sculpt.png'
import proFilePic from '/ProfilepicPort41.png'
import proFilePic2 from '/ProfilepicPort23.png'
import proFilePic3 from '/ProfilepicPort3.png'
import aboutMePic from '/Mikazuki.gif'
import typing_gif from '/typing.gif'


function App() {

  const handleClick = (value) => {
    setSection(value);
  };

  const [section, setSection] = useState("Profile");
  const [imageSrc, setImageSrc] = useState(typing_gif);

  return (
    <>
      {/* section 1 */}
      <div className="bg-[url('/NightSky3.jpg')] bg-fixed bg-no-repeat bg-cover h-[540px] md:h-[820px] w-screen">
        <section className={"font-poppins container mx-auto"}>
        <FadeIn2>
          <Navbar />
          <NavbarMobile />
        </FadeIn2>
            <div className="night">
              <div className="star"></div>
              <div className="star"></div>
            </div>
          <div className='h-[700px]'>
            <div className={`relative`}>
            <FadeIn2 delay={400}>
              <img src={proFilePic2} className="absolute object-cover h-[330px] sm:h-[380px] md:h-auto left-[130px] sm:left-[110px] md:left-[300px] lg:left-[420px] xl:left-[530px] top-[147px] sm:top-[94px] md:top-[69px] transform hover:scale-105 hover:top-[138px] sm:hover:top-[84px] md:hover:top-[53px] hover:drop-shadow-2xl duration-500" alt="Profile_Picture" />
              <img src={proFilePic} className="absolute object-cover h-[350px] sm:h-[400px] md:h-auto left-[10px] sm:left-[-15px] md:left-[30px] lg:left-[200px] xl:left-[300px] top-[127px] sm:top-[74px] md:top-[42px] transform hover:scale-105 hover:top-[118px] sm:hover:top-[64px] md:hover:top-[25px] hover:drop-shadow-2xl duration-500" alt="Profile_Picture" />
            </FadeIn2>
            <FadeIn2 delay={800}>
              <h2 className='text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal absolute top-[300px] md:left-32 md:top-[520px] lg:top-[460px] xl:top-[400px] z-20'>Suttikarn</h2>
            </FadeIn2>
            <FadeIn2 delay={1200}>
              <h1 className='text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold absolute top-[350px] md:left-32 md:top-[580px] lg:top-[550px] xl:top-[500px] z-30'>Web Developer</h1>
            </FadeIn2>
            </div>
          </div>
        </section>
      </div>
      {/* section 2 */}
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
      {/* section 3 */}
      <div className="bg-[url('/NightSky&Mout.jpg')] bg-fixed bg-no-repeat bg-cover h-[1100px] md:h-[800px] w-screen" id='skills'>
        <section className="font-poppins container mx-auto">
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 py-10 md:py-20 pl-5 pr-5 md:pl-0 md:pr-10'>
              <div className='text-white mb-10'>
              <FadeIn offset={1000} delay={300}>
                <h3 className='font-medium text-4xl'>Skills</h3>
              </FadeIn>
                <div className='flex text-xl pt-10 pl-10'>
                  <div className='w-1/2'>
                  <FadeIn offset={1000} delay={600}>
                    <p className='pt-10'>• HTML, CSS</p>
                    <p className='pt-10'>• JavaScript</p>
                    <p className='pt-10'>• React</p>
                    <p className='pt-10'>• Node.js</p>
                  </FadeIn>
                  </div>
                  <div className='w-1/2'>
                  <FadeIn offset={1000} delay={900}>
                    <p className='pt-10'>• Git</p>
                    <p className='pt-10'>• MongoDB</p>
                    <p className='pt-10'>• Tailwind CSS</p>
                    <p className='pt-10'>• Photoshop</p>
                  </FadeIn>
                  </div>
                </div>
                <FadeIn offset={1000} delay={1200}>
                <div className='mt-20 flex justify-center md:justify-start gap-5'>
                  <img className='w-[40px] md:w-[80px]' src="/html-logo.png" alt="html-logo" />
                  <img className='w-[40px] md:w-[80px]' src="/css-logo.png" alt="css-logo" />
                  <img className='w-[35px] md:w-[70px]' src="/js-logo.png" alt="js-logo" />
                  <img className='w-[40px] md:w-[80px]' src="/react-logo.png" alt="react-logo" />
                  <img className='w-[40px] md:w-[80px]' src="/git-logo.png" alt="git-logo" />
                </div>
                <div className='mt-3 flex justify-center md:justify-start gap-5'>
                  <img className='w-[50px] md:w-[100px]' src="/nodejs-logo.png" alt="NodeJs-logo" />
                  <img className='w-[40px] md:w-[80px]' src="/mg-logo.png" alt="mongoDB-logo" />
                  <img className='w-[50px] md:w-[100px]' src="/tw-logo.png" alt="Tailwind-logo" />
                  <img className='w-[50px] md:w-[100px]' src="/ps-logo.png" alt="Photoshop-logo" />
                </div>
                </FadeIn>
              </div>
            </div>
            <div className='w-full md:w-1/2 py-0 md:py-20 pl-5 pr-5 md:pl-10 md:pr-0 relative'>
              <div className='text-white mb-10'>
              <FadeIn offset={1000} delay={1500}>
                <h3 className='font-medium text-4xl'>Certificate</h3>
              </FadeIn>
              <FadeIn offset={1000} delay={1800}>
                <div className='text-xl pt-10 pl-10'>
                  <p className='pt-10'>• AWS re/Start Graduate</p>
                  <p className='pt-10'>• AWS Certified Cloud Practitioner</p>
                </div>
              </FadeIn>
              </div>
              <FadeIn offset={1000} delay={2100}>
              <div className='mt-10 lg:mt-20 flex justify-center md:justify-start gap-5'>
                  <img className='w-[70px] md:w-[100px]' src="/aws-re-start.png" alt="AWS-restart-logo" />
                  <img className='w-[70px] md:w-[100px]' src="/aws-cloud-prac.png" alt="AWS-Prac-logo" />
              </div>
              </FadeIn>
              <img src={proFilePic3} alt="profile-pic-3" className="absolute md:right-[-10px] md:bottom-[-50px] hidden md:block" />
            </div>
          </div>
        </section>
      </div>
      {/* section 4 */}
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
      {/* section 5 */}
      <div className="bg-[url('/Sunset_sky2.jpg')] bg-fixed bg-no-repeat bg-cover h-[650px] md:h-[650px] w-screen" id='contact'>
          <section className={`font-poppins container mx-auto`}>
          <div className='w-full py-10 md:py-20 pl-5 pr-5 md:pl-0 md:pr-10'>
            <div className='text-white mb-10'>
              <FadeIn offset={2200} delay={300}>
                <h3 className='font-medium text-4xl'>Contact</h3>
              </FadeIn>
              <FadeIn offset={2200} delay={600}>
                <div className='flex flex-col lg:flex-row items-center lg:justify-evenly mt-20 text-xl'>
                  <div className='flex items-center gap-6 mb-5 lg:mb-0'><span className="material-symbols-outlined">call</span><p>096 - 325 - 6945</p></div>
                  <div className='flex items-center gap-6 mb-5 lg:mb-0'><span className="material-symbols-outlined">mail</span><p>suttikarn1997@gmail.com</p></div>
                  <div className='flex items-center gap-6 mb-5 lg:mb-0'><span className="material-symbols-outlined">location_on</span><p>Khon Kaen, Thailand</p></div>
                </div>
              </FadeIn>
            </div>
              <div className='mt-20'>
                <FadeIn offset={2200} delay={900}>
                  <div className='flex justify-center gap-10'>
                    <a href='https://www.linkedin.com/in/suttikarn-suranan-a53537200' target='_blank'><img className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' src="/linkedin-icon.svg" alt="linkedin_icon" /></a>
                    <a href='https://www.facebook.com/suttikarn.suranan' target='_blank'><img src="/fb-icon.svg" className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' alt="fb-icon" /></a>
                    <a href='https://www.instagram.com/karn.ner_z/' target='_blank'><img src="/ig-icon.svg" className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:-translate-y-1 ease-in-out duration-300' alt="ig-icon" /></a>
                  </div>
                </FadeIn>
              </div>
                <FadeIn offset={2200} delay={1200}>
                  <div className='flex justify-center mt-20'>
                    <img className='w-20' src={coffee} alt="coffee_gif" />
                  </div>
                </FadeIn>
          </div>
          </section>
      </div>
    </>
  )
}

export default App
