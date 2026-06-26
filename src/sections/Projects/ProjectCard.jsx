import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-cyan-500/20
      "
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <div className="absolute text-gray-500 text-lg font-medium">
          Project Preview
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-slate-800
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-slate-700
            "
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <HiOutlineArrowTopRightOnSquare />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;