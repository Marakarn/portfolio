import { NavLink } from "react-router-dom";
import cv from '/Suttikarn_CV.pdf'

const NavbarMobile = () => {
  return (
    <>
      <nav className="bg-transparent p-2 px-2 block md:hidden">
        <div className="flex justify-between items-center">
        <a className='download'
              href="Suttikarn_CV.pdf"
              download={cv}
              ><button className="btn bg-transparent border-white border-[2px] text-md font-normal text-white" >
            CV Download
            <span className="material-symbols-outlined">
              file_save
            </span>
          </button></a>
          <div className="bg-white text-black rounded-xl">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <div className="relative">
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 absolute top-[-60px] right-20">
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </div>
                </div>
            </div>
        </div>
      </nav>
      <hr className="border-[2px] md:hidden"/>
    </>
  );
};

export default NavbarMobile;
