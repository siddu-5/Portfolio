import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";
import QuickStats from "./QuickStats";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-10 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <AboutIntro />

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">
          <AboutCards />

          <QuickStats />
        </div>
      </div>
    </section>
  );
}

export default About;