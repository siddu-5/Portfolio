import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";

function AboutIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center">
      {/* Section Tag */}
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        ABOUT ME
      </p>

      {/* Heading */}
      <h2 className="relative z-10 mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
        Get to Know Me Better
      </h2>

      {/* Intro */}
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        {aboutData.intro}
      </p>

      {/* Divider */}
      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
    </motion.div>
  );
}

export default AboutIntro;
