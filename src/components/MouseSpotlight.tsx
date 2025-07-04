'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function MouseSpotlight() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const animationRef = useRef<number | null>(null)
  const targetPosition = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    setSpotlightPosition(current => {
      const dx = targetPosition.current.x - current.x
      const dy = targetPosition.current.y - current.y

      // Linear interpolation with easing factor (0.08 = slower follow)
      const easeFactor = 0.08

      return {
        x: current.x + dx * easeFactor,
        y: current.y + dy * easeFactor,
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  return (
    <>
      {/* Main spotlight effect */}
      <div
        className='pointer-events-none fixed inset-0 z-20 transition-opacity duration-300'
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(800px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(255, 255, 227, 0.03), rgba(136, 224, 136, 0.05) 30%, transparent 60%)`,
        }}
      />

      {/* Inner glow */}
      <div
        className='pointer-events-none fixed inset-0 z-20 transition-opacity duration-300'
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(300px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(255, 255, 227, 0.08), transparent 50%)`,
        }}
      />
    </>
  )
}
