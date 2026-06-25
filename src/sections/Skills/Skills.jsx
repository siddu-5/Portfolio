import SkillsTitle from "./SkillsTitle";
import SkillCategory from "./SkillCategory";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#111827] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SkillsTitle />

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.category}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;