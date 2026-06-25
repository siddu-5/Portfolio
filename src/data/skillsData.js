import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },

  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    category: "AI / ML",
    skills: [
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },

  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default skillsData;