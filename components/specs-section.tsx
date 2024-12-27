"use client"

import { motion } from "framer-motion"
import { Battery, Gauge, Ruler } from 'lucide-react'

export function SpecsSection() {
  const specs = [
    {
      icon: <Ruler className="h-8 w-8" />,
      value: "79cm",
      label: "Width"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      value: "-€3,000",
      label: "Annual Cost"
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      value: "-10t",
      label: "CO₂/year"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Less is More</h2>
          <p className="text-xl text-gray-300">Less weight = more fun</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              className="text-center p-8 rounded-lg bg-purple-900/10 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-4">
                {spec.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{spec.value}</h3>
              <p className="text-gray-400">{spec.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}