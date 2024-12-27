"use client"

import { motion } from "framer-motion"

export function VehicleSpecsFeatures() {
  const features = [
    {
      title: "Made in France",
      description: "Over 80% value added in France, contributing to local industrial expertise"
    },
    {
      title: "Unique Driving",
      description: "Exclusive tilting chassis for dynamic cornering and motorcycle-like agility"
    },
    {
      title: "Built to Last",
      description: "Easily serviceable components with authorized AEMOTION garage support"
    }
  ]

  return (
    <motion.section 
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl mb-8">Features</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 rounded-lg bg-zinc-900">
            <h4 className="font-medium mb-4">{feature.title}</h4>
            <p className="text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}