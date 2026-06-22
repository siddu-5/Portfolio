import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#030712] via-[#0F172A] to-[#030712] pt-28">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
      linear-gradient(to right, #ffffff 1px, transparent 1px),
      linear-gradient(to bottom, #ffffff 1px, transparent 1px)
    `,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Decorative Background Blurs */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute top-40 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="max-w-[1280px] mx-auto w-full px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <HeroText />

            <HeroButtons />

            <SocialIcons />
          </motion.div>

          {/* Right Side */}

          <HeroImage />
        </div>
      </div>
      {/* Scroll Indicator */}

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a
          href="#about"
          className="text-blue-400 hover:text-blue-300 transition-colors">
          <LuMouse size={28} />
        </a>
        <span className="text-xs text-gray-500 mt-1">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
