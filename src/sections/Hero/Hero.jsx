import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#030712] via-[#0F172A] to-[#030712] pt-28"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute top-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[170px]" />

      <Layout>
        <div className="min-h-[calc(100vh-96px)] grid items-center lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl lg:pr-10"
          >
            <HeroText />

            <HeroButtons />

            <SocialIcons />
          </motion.div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:-ml-10">
            <HeroImage />
          </div>

        </div>
      </Layout>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-blue-400 hover:text-cyan-400 transition"
        >
          <LuMouse size={30} />
          <span className="mt-1 text-xs text-gray-500">
            Scroll
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;