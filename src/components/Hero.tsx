'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [showPhonetic, setShowPhonetic] = useState(false)

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
          <span className="text-accent hover:text-accent/80 transition-colors duration-300">
            Lucas Ota
            <span 
              className="relative inline-block cursor-help"
              onMouseEnter={() => setShowPhonetic(true)}
              onMouseLeave={() => setShowPhonetic(false)}
            >
              ñ
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent/90 text-background px-2 py-1 rounded text-sm font-normal whitespace-nowrap backdrop-blur-sm"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ 
                  opacity: showPhonetic ? 1 : 0, 
                  y: showPhonetic ? 0 : 10,
                  scale: showPhonetic ? 1 : 0.8
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ pointerEvents: 'none' }}
              >
                /ˈɲoː/
              </motion.span>
            </span>
            o
          </span>{' '}
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