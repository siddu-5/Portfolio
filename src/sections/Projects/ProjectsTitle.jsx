import { motion } from "framer-motion";

function ProjectsTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      {/* Section Tag */}
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        PROJECTS
      </p>

      {/* Heading */}
      <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        Featured Projects
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        A collection of AI, Machine Learning, and Full Stack projects that
        demonstrate my problem-solving skills, software development experience,
        and passion for building impactful applications.
      </p>

      {/* Divider */}
      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
    </motion.div>
  );
}

export default ProjectsTitle;