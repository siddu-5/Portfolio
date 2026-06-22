import socialLinks from "../../constants/socialLinks";

function SocialIcons() {
  return (
    <div className="flex gap-6 mt-10">

      {socialLinks.map((social) => {

        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-blue-500 transition duration-300 hover:-translate-y-1"
          >
            <Icon />
          </a>
        );

      })}

    </div>
  );
}

export default SocialIcons;