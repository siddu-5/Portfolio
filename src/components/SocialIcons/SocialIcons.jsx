import socialLinks from "../../constants/socialLinks";
import { motion } from "framer-motion";

function SocialIcons() {
  return (
    <div className="mt-10 flex items-center gap-5">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -6,
              scale: 1.12,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-gray-300
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/10
              hover:text-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/25
            "
          >
            <Icon
              size={24}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </motion.a>
        );
      })}
    </div>
  );
}

export default SocialIcons;