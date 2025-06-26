'use client'

import { motion } from 'framer-motion'

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Angular", "NestJS", 
  "SQL", "MongoDB", "TRPC", "Microfrontends", "AI-powered workflows", 
  "Frontend architecture", "System integrations", "Team leadership"
]

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 text-sm md:text-base font-medium cursor-default backdrop-blur-light"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}