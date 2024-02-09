import './App.css'
import FadeIn from './FadeIn'
import proFilePic3 from '/ProfilepicPort3.png'

const Section3 = () => {
    return (
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
    )
}

export default Section3