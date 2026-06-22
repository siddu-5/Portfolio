import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeroSocial() {
  return (
    <div className="flex gap-6 mt-10 text-2xl text-gray-400">

      <FaGithub />

      <FaLinkedin />

      <SiLeetcode />

      <FaHackerrank />

    </div>
  );
}

export default HeroSocial;