"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VehicleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transported by
          <br />
          <span className="text-purple-400">ÆMOTION</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover a new kind of electric vehicle, designed to overcome everyday constraints at every moment.
        </motion.p>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="https://cdn.prod.website-files.com/674d73b06fb0202f972f9f66/6757148a57ac65e2957bdd39_EV4%20ROOF.webp"
          alt="Vehicle Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
    </section>
  )
}