import './App.css'
import FadeIn from './FadeIn'
import coffee from '/HotCoffee.gif'

const Section5 = () => {
    return (
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
    )
}

export default Section5