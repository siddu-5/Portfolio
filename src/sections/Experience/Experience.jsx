import ExperienceTitle from "./ExperienceTitle";
import Timeline from "./Timeline";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#111827] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ExperienceTitle />

        <Timeline />
      </div>
    </section>
  );
}

export default Experience;