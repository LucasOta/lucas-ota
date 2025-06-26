'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className='py-20 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className='text-lg leading-relaxed mb-6'>
              I'm a developer who believes that the best products come from
              close collaboration between tech and product. My background is
              technical, but I'm always thinking about the bigger picture — the
              users, the business, and the impact.
            </p>
            <p className='text-lg leading-relaxed'>
              Based in Argentina, working remotely with international teams. On
              a mission to make every pull request count.
            </p>
          </motion.div>
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className='relative group'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <img
                src='/me.webp'
                alt='Lucas Otaño'
                className='w-64 h-64 object-cover rounded-full shadow-lg border-4 border-accent/20 group-hover:border-accent/40 transition-colors duration-300'
              />
              <div className='absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
