import TypingText from "../../components/TypingText/TypingText";
function HeroText() {
  return (
    <div className="space-y-6">

      <p className="text-blue-400 font-medium">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">

        ARNAKONDA

        <br />

        <span className="text-blue-500">
          SIDDARTHA
        </span>

      </h1>

      <TypingText />

      <p className="text-gray-400 max-w-xl leading-8">

        Passionate about building intelligent applications,
        scalable software, and solving real-world problems
        using Artificial Intelligence and Full Stack Development.

      </p>

    </div>
  );
}

export default HeroText;