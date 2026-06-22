import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="flex justify-center"
    >
      <div className="relative">

        <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>

        <div
          className="
          relative
          flex
          h-64
          w-64
          items-center
          justify-center
          rounded-full
          border-4
          border-blue-500
          bg-gradient-to-br
          from-blue-500
          to-purple-600
          shadow-2xl
          shadow-blue-500/30

          md:h-72
          md:w-72

          lg:h-80
          lg:w-80
          "
        >
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-8xl font-bold text-transparent">
            SA
          </span>
        </div>

      </div>
    </motion.div>
  );
}

export default HeroImage;