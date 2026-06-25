import {
  HiOutlineArrowDownTray,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { motion } from "framer-motion";

function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-12 flex flex-wrap items-center gap-6"
    >
      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-600
          bg-[length:200%_200%]
          px-9
          py-4
          text-base
          font-semibold
          text-white
          shadow-xl
          shadow-blue-500/30
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-105
          hover:bg-right
          hover:shadow-cyan-500/40
        "
      >
        <HiOutlineArrowDownTray
          size={22}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />

        <span>Download Resume</span>
      </a>

      {/* Projects Button */}
      <a
        href="#projects"
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/50
          bg-white/5
          backdrop-blur-md
          px-9
          py-4
          text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:border-cyan-300
          hover:bg-cyan-500/10
          hover:shadow-xl
          hover:shadow-cyan-500/20
        "
      >
        <HiOutlineRocketLaunch
          size={22}
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-1"
        />

        <span>View Projects</span>
      </a>
    </motion.div>
  );
}

export default HeroButtons;