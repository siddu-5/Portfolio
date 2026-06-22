import navLinks from "../../constants/navLinks";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#030712]/70 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-18 px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/40">
            SA
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg">Siddartha</span>
            <span className="text-xs text-gray-400">AI / ML</span>
          </div>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
          <HiOutlineArrowDownTray size={18} />
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
