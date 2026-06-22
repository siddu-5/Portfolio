import socialLinks from "../../constants/socialLinks";

function SocialIcons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className="text-[30px] text-gray-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_#22d3ee]"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;