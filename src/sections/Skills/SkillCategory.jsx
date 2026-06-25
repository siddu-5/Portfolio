import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function SkillCategory({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-cyan-500/20
      "
    >
      {/* Category Title */}
      <h3 className="mb-6 text-2xl font-bold tracking-wide text-cyan-400">
        {category.category}
      </h3>

      {/* Skills */}
      <div className="grid gap-4">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;