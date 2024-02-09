import FadeIn2 from './FadeIn2'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import proFilePic from '/ProfilepicPort41.png'
import proFilePic2 from '/ProfilepicPort23.png'

const Section1 = () => {
  return (
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
        <div className="h-[700px]">
          <div className={`relative`}>
            <FadeIn2 delay={400}>
              <img
                src={proFilePic2}
                className="absolute object-cover h-[330px] sm:h-[380px] md:h-auto left-[130px] sm:left-[110px] md:left-[300px] lg:left-[420px] xl:left-[530px] top-[147px] sm:top-[94px] md:top-[69px] transform hover:scale-105 hover:top-[138px] sm:hover:top-[84px] md:hover:top-[53px] hover:drop-shadow-2xl duration-500"
                alt="Profile_Picture"
              />
              <img
                src={proFilePic}
                className="absolute object-cover h-[350px] sm:h-[400px] md:h-auto left-[10px] sm:left-[-15px] md:left-[30px] lg:left-[200px] xl:left-[300px] top-[127px] sm:top-[74px] md:top-[42px] transform hover:scale-105 hover:top-[118px] sm:hover:top-[64px] md:hover:top-[25px] hover:drop-shadow-2xl duration-500"
                alt="Profile_Picture"
              />
            </FadeIn2>
            <FadeIn2 delay={800}>
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal absolute top-[300px] md:left-32 md:top-[520px] lg:top-[460px] xl:top-[400px] z-20">
                Suttikarn
              </h2>
            </FadeIn2>
            <FadeIn2 delay={1200}>
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold absolute top-[350px] md:left-32 md:top-[580px] lg:top-[550px] xl:top-[500px] z-30">
                Web Developer
              </h1>
            </FadeIn2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
