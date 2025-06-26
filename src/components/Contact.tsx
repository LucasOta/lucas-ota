'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, BookOpen } from 'lucide-react'

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LucasOta",
    icon: Github,
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lucas-mat%C3%ADas-ota%C3%B1o-363167172/",
    icon: Linkedin,
    description: "Let's connect professionally"
  },
  {
    name: "Medium",
    url: "https://medium.com/@lucasotano",
    icon: BookOpen,
    description: "Read my thoughts"
  }
]

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          I'm always interested in new opportunities and conversations about technology, 
          product development, and the future of software.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-lg hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 group min-w-[200px] justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                <div className="text-left">
                  <div className="font-medium text-accent">{link.name}</div>
                  <div className="text-sm text-secondary">{link.description}</div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}