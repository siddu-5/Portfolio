import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import HeroImage from "./HeroImage";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#030712] pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <HeroText />

            <HeroButtons />

            <SocialIcons />

          </div>

          {/* Right Side */}

          <HeroImage />

        </div>

      </div>
    </section>
  );
}

export default Hero;