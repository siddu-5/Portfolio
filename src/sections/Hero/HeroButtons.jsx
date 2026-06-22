import {
  HiOutlineArrowDownTray,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-5">

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        aria-label="Download Resume"
        className="group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
      >
        <HiOutlineArrowDownTray
          size={20}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
        <span>Download Resume</span>
      </a>

      {/* Projects Button */}
      <a
        href="#projects"
        aria-label="View Projects"
        className="group flex items-center justify-center gap-2 rounded-full border border-blue-500 px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
      >
        <HiOutlineRocketLaunch
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
        <span>View Projects</span>
      </a>

    </div>
  );
}

export default HeroButtons;