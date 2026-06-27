import { motion } from "framer-motion";

function ContactCard({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-cyan-500/10 p-3">
          <Icon className="text-2xl text-cyan-400" />
        </div>

        <div>
          <p className="text-sm text-gray-400">{title}</p>

          <p className="font-medium text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactCard;