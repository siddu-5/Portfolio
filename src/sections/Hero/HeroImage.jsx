import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative flex justify-center items-center"
    >
      {/* Outer Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Secondary Glow */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-purple-500/20 blur-[80px]" />

      {/* Ring */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-cyan-400/70
          bg-gradient-to-br
          from-blue-500
          via-indigo-500
          to-purple-600
          shadow-[0_0_80px_rgba(59,130,246,0.35)]

          h-[280px]
          w-[280px]

          sm:h-[320px]
          sm:w-[320px]

          md:h-[380px]
          md:w-[380px]

          lg:h-[440px]
          lg:w-[440px]

          xl:h-[470px]
          xl:w-[470px]
        "
      >
        {/* Inner Glow */}
        <div className="absolute inset-5 rounded-full bg-white/5 backdrop-blur-sm" />

        {/* Placeholder */}
        <span
          className="
            relative
            z-10
            bg-gradient-to-r
            from-white
            to-slate-200
            bg-clip-text
            text-transparent
            font-extrabold

            text-7xl
            md:text-8xl
            lg:text-9xl
          "
        >
          SA
        </span>
      </div>
    </motion.div>
  );
}

export default HeroImage;