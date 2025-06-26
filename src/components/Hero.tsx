'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hi, I'm{' '}
          <span className="text-accent hover:text-accent/80 transition-colors duration-300">Lucas Otaño</span>{' '}
          —
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          A full-stack developer with a product mindset.
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          I thrive at the intersection of code and business, translating real-world needs into meaningful software. 
          Currently diving deep into AI tools to streamline workflows and help teams ship smarter.
        </motion.p>
      </div>
    </section>
  )
}