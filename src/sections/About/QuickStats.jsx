import { motion } from "framer-motion";
import statsData from "../../data/statsData";
import {
  HiOutlineFolder,
  HiOutlineDocumentCheck,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
} from "react-icons/hi2";

const icons = [
  <HiOutlineFolder size={28} />,
  <HiOutlineDocumentCheck size={28} />,
  <HiOutlineCodeBracket size={28} />,
  <HiOutlineCpuChip size={28} />,
];

function QuickStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 gap-6"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.04,
            y: -6,
          }}
          className="
            rounded-3xl
            border
            border-white/10
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
          <div className="mb-5 flex justify-center text-cyan-400">
            {icons[index]}
          </div>

          <h3 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {stat.value}
          </h3>

          <p className="mt-4 text-center text-gray-300 font-medium leading-7">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default QuickStats;