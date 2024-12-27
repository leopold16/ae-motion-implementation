"use client"

import { motion } from "framer-motion"

export function VehicleSpecsDrive() {
  const specs = [
    {
      label: "Battery Range",
      value: ["70 km (swappable)", "200 km (fixed)"]
    },
    {
      label: "Maximum Speed",
      value: ["115 km/h"]
    },
    {
      label: "Tilt Angle",
      value: [">35°"]
    }
  ]

  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl mb-8">Drive</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {specs.map((spec) => (
          <div key={spec.label}>
            <div className="text-zinc-500 mb-2">{spec.label}</div>
            {spec.value.map((val, index) => (
              <div key={index} className="text-xl">{val}</div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  )
}