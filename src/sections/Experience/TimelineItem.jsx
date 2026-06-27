import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";

function TimelineItem({ item, isLast }) {
  const getIcon = () => {
    switch (item.type) {
      case "education":
        return <HiOutlineAcademicCap size={22} />;
      case "internship":
        return <HiOutlineBriefcase size={22} />;
      case "certificate":
        return <HiOutlineDocumentCheck size={22} />;
      default:
        return <HiOutlineCodeBracket size={22} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
          {getIcon()}
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="mb-12 flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20">
        <p className="text-sm font-semibold text-cyan-400">
          {item.year}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-1 text-blue-300">
          {item.organization}
        </p>

        <p className="mt-4 leading-7 text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;