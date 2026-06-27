import ContactTitle from "./ContactTitle";
import ContactCard from "./ContactCard";
import ContactSocials from "./ContactSocials";
import contactData from "../../data/contactData";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <ContactTitle />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {contactData.info.map((item) => (
            <ContactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        <ContactSocials />

        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105"
          >
            <HiOutlineArrowDownTray size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;