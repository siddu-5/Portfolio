import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      transition={{ duration: 0.25 }}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-3
        py-2.5
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-400/10
        "
    >
      <Icon className="text-3xl text-cyan-400" />

      <span className="font-medium text-white">{skill.name}</span>
    </motion.div>
  );
}

export default SkillCard;
