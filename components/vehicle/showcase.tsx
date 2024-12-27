"use client"

import { motion } from "framer-motion"
import { FeatureVideo } from "../features/feature-video"

export function VehicleShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-video">
              <FeatureVideo 
                src="https://cdn.prod.website-files.com/674d73b06fb0202f972f9f66/6758008232d32a83967c8755_Animation%20Dual%20rendu%20vitesse%20x4%200001-0440-transcode.mp4" 
              />
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Offering Only the <span className="text-purple-400">Best</span>
            </h2>
            <p className="text-xl text-gray-300">
              An essential combination of features: removable batteries, safety belts, 
              adjustable rear space, gull-wing doors, and more...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}