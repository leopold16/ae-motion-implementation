"use client"

import { motion } from "framer-motion"

export function VehicleSpecsTabs() {
  return (
    <motion.div 
      className="flex gap-8 mb-16 border-b border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="border-b-2 border-white pb-4">Standard Range</div>
      <div className="text-zinc-500 pb-4">Extended Range</div>
    </motion.div>
  )
}