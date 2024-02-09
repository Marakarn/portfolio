import { NavLink } from "react-router-dom";
import cv from '/Suttikarn_CV.pdf'

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent pt-[40px] pb-[20px] hidden md:block">
        <div className="flex justify-between items-center">
          <a className='download'
              href="Suttikarn_CV.pdf"
              download={cv}
              ><button className="btn bg-transparent border-white border-[2px] text-xl font-medium text-white" >
            CV Download
            <span className="material-symbols-outlined">
              file_save
            </span>
            </button></a>
          <ul className="flex justify-end pr-[20px] gap-10 text-2xl text-white">
            <li className="transition-all transform hover:-translate-y-1 ease-in-out duration-300 hover:text-sky-700">
              <a href="#about" >
                About me
              </a>
            </li>
            <li className="transition-all transform hover:-translate-y-1 ease-in-out duration-300 hover:text-sky-700">
              <a href="#skills" >
                Skills
              </a>
            </li>
            <li className="transition-all transform hover:-translate-y-1 ease-in-out duration-300 hover:text-sky-700">
              <a href="#project">
                Project
              </a>
            </li>
            <li className="transition-all transform hover:-translate-y-1 ease-in-out duration-300 hover:text-sky-700">
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="hidden md:block border-[2px]"/>
    </>
  );
};

export default Navbar;
