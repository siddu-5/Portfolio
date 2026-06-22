function HeroButtons() {
  return (
    <div className="flex gap-5 mt-8">

      <a
        href="/resume.pdf"
        className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

      <a
        href="#projects"
        className="px-7 py-3 rounded-full border border-blue-500 hover:bg-blue-500 transition"
      >
        View Projects
      </a>

    </div>
  );
}

export default HeroButtons;