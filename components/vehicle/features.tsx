"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VehicleFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seated in its secure cockpit, you'll enjoy unmatched agility to free yourself from congestion and rediscover the pleasure of moving around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2560&auto=format&fit=crop"
              alt="Vehicle Interior"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2560&auto=format&fit=crop"
              alt="Vehicle Exterior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}