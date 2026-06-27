import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const contactData = {
  email: "siddarthaarnakonda@gmail.com",

  location: "Hyderabad, Telangana",

  socials: [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/siddu-5",
    },

    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/siddartha-arnakonda-ba1019381/",
    },

    {
      name: "LeetCode",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/siddu_55/",
    },

    {
      name: "HackerRank",
      icon: FaHackerrank,
      url: "https://www.hackerrank.com/profile/siddarthaarnako1",
    },
  ],

  info: [
    {
      icon: HiOutlineEnvelope,
      title: "Email",
      value: "siddarthaarnakonda@gmail.com",
    },

    {
      icon: HiOutlineMapPin,
      title: "Location",
      value: "Hyderabad, Telangana",
    },
  ],
};

export default contactData;