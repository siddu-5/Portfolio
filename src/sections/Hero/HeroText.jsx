import TypingText from "../../components/TypingText/TypingText";
import { motion } from "framer-motion";

function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <div className="space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>

          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-green-400"
          >
            Open to AI/ML & Software Engineering Internships
          </motion.span>
        </div>

        {/* Greeting */}
        <p className="flex items-center gap-2 text-xl font-medium text-blue-400">
          <span className="text-2xl">👋</span>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="leading-[0.9] font-extrabold">
          <span className="block text-6xl md:text-7xl text-slate-300">
            Arnakonda
          </span>

          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-6xl md:text-7xl text-transparent">
            Siddartha
          </span>
        </h1>

        {/* Typing Text */}
        <div className="flex h-12 items-center">
          <TypingText />
        </div>

        {/* Description */}
        <p className="max-w-xl text-lg leading-8 text-gray-400">
          I build AI-powered applications, scalable full-stack solutions, and
          machine learning systems that solve real-world problems through modern
          software engineering.
        </p>
      </div>
    </motion.div>
  );
}

export default HeroText;