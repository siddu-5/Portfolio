import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";
import {
  HiOutlineAcademicCap,
  HiOutlineMapPin,
  HiOutlineBriefcase,
  HiOutlineStar,
  HiOutlineUserCircle,
} from "react-icons/hi2";

function AboutCards() {
  const details = [
    {
      icon: <HiOutlineAcademicCap size={22} />,
      label: "Education",
      value: aboutData.education,
    },
    {
      icon: <HiOutlineAcademicCap size={22} />,
      label: "College",
      value: aboutData.college,
    },
    {
      icon: <HiOutlineMapPin size={22} />,
      label: "Location",
      value: aboutData.location,
    },
    {
      icon: <HiOutlineStar size={22} />,
      label: "CGPA",
      value: aboutData.cgpa,
    },
    {
      icon: <HiOutlineBriefcase size={22} />,
      label: "Status",
      value: aboutData.status,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-blue-500/20
      "
      >
        {/* Profile Icon */}
        <div className="flex justify-center">
          <div
            className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-500
            to-purple-600
            text-white
            shadow-lg
            shadow-blue-500/30
          "
          >
            <HiOutlineUserCircle size={70} />
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-6 text-center text-3xl font-bold text-white">
          {aboutData.name}
        </h3>

        {/* Role */}
        <p className="mt-2 text-center text-blue-400 font-medium">
          {aboutData.role}
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        {/* Information */}
        <div className="space-y-5">
          {details.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4"
            >
              <div className="text-blue-400 mt-1">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <p className="text-white font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        {/* Quote */}
        <p className="text-center italic text-gray-400 leading-7">
          "{aboutData.quote}"
        </p>
      </div>
    </motion.div>
  );
}

export default AboutCards;