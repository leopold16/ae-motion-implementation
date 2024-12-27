"use client"

import { motion } from "framer-motion"
import { VehicleSpecsDrive } from "./specs/drive"
import { VehicleSpecsDimensions } from "./specs/dimensions"
import { VehicleSpecsFeatures } from "./specs/features"
import { VehicleSpecsTabs } from "./specs/tabs"

export function VehicleSpecs() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-medium mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vehicle Specifications
        </motion.h2>
        
        <VehicleSpecsTabs />
        <VehicleSpecsDrive />
        <VehicleSpecsDimensions />
        <VehicleSpecsFeatures />
      </div>
    </section>
  )
}