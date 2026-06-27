import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

function Footer() {
  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  const socials = [
    {
      icon: FaGithub,
      url: "https://github.com/siddu-5",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/siddartha-arnakonda-ba1019381/",
    },
    {
      icon: SiLeetcode,
      url: "https://leetcode.com/u/siddu_55/",
    },
    {
      icon: FaHackerrank,
      url: "https://www.hackerrank.com/profile/siddarthaarnako1",
    },
  ];

  return (
    <footer className="bg-[#111827] border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-3xl font-bold text-white">
          Arnakonda Siddartha
        </h2>

        <p className="mt-2 text-center text-gray-400">
          AI & ML Student • Full Stack Developer
        </p>

        {/* Navigation */}

        <div className="mt-10 flex flex-wrap justify-center gap-6">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-gray-400 transition hover:text-cyan-400"
            >
              {link === "experience" ? "Journey" : link}
            </a>
          ))}

        </div>

        {/* Socials */}

        <div className="mt-10 flex justify-center gap-6">

          {socials.map((social, index) => {

            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 transition hover:text-cyan-400"
              >
                <Icon />
              </a>
            );

          })}

        </div>

        {/* Copyright */}

        <p className="mt-10 text-center text-gray-500">
          © 2026 Arnakonda Siddartha. All rights reserved.
        </p>

        <p className="mt-2 text-center text-gray-600">
          Built with React, Tailwind CSS & Framer Motion
        </p>

        {/* Back To Top */}

        <div className="mt-10 flex justify-center">

          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-cyan-400/30 px-6 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
          >
            <HiArrowUp />
            Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;