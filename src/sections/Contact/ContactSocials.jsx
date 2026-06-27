import contactData from "../../data/contactData";

function ContactSocials() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      {contactData.socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            <Icon className="text-xl" />

            {social.name}
          </a>
        );
      })}
    </div>
  );
}

export default ContactSocials;