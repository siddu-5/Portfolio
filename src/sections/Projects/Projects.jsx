import ProjectsTitle from "./ProjectsTitle";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ProjectsTitle />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;