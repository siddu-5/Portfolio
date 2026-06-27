import { motion } from "framer-motion";

function ContactTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
        CONTACT
      </p>

      <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        Let's Build Something Amazing Together
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        I'm currently open to AI/ML internships, software engineering
        opportunities, and collaborations. Feel free to reach out if you'd like
        to work together or discuss exciting ideas.
      </p>

      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
    </motion.div>
  );
}

export default ContactTitle;