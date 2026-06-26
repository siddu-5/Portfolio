function TechBadge({ tech }) {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-3
        py-1
        text-sm
        font-medium
        text-cyan-300
        transition-all
        duration-300
        hover:bg-cyan-400/20
      "
    >
      {tech}
    </span>
  );
}

export default TechBadge;