import TypingText from "../../components/TypingText/TypingText";
import { motion } from "framer-motion";
function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}>
      {/* Existing Hero Text */}
      <div className="space-y-7">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-green-400">
            Open to AI/ML & Software Engineering Internships
          </motion.span>
        </div>
        <p className="flex items-center gap-2 text-lg font-medium text-blue-400">
          <span>👋</span>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none">
          <span className="block text-slate-400">Arnakonda</span>

          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Siddartha
          </span>
        </h1>

        <div className="h-12 flex items-center">
          <TypingText />
        </div>

        <p className="max-w-lg text-lg leading-8 text-gray-400">
          I build AI-powered applications, scalable full-stack solutions, and
          machine learning systems that solve real-world problems.
        </p>
      </div>
    </motion.div>
  );
}

export default HeroText;
