"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VehicleSpecsDimensions() {
  const specs = [
    {
      label: "Weight",
      value: "230 kg (with batteries)"
    },
    {
      label: "Dimensions",
      value: "235 x 79 x 171 cm"
    },
    {
      label: "Capacity",
      value: "2 adults"
    },
    {
      label: "License Required",
      value: "B + 7h training"
    }
  ]

  return (
    <motion.section 
      className="grid md:grid-cols-2 gap-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-2xl mb-8">Dimensions</h3>
        <div className="grid gap-8">
          {specs.map((spec) => (
            <div key={spec.label}>
              <div className="text-zinc-500 mb-2">{spec.label}</div>
              <div className="text-xl">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2560&auto=format&fit=crop"
          alt="Vehicle dimensions"
          width={600}
          height={400}
          className="object-contain rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-zinc-500 p-4">
          <span>Width: 79 cm</span>
          <span>Length: 235 cm</span>
        </div>
      </div>
    </motion.section>
  )
}