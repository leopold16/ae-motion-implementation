"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { type Feature } from "@/types/features"

interface FeatureCardProps {
  feature: Feature
  index: number
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The future will be <span className="text-purple-400">{feature.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{feature.description}</p>
        </div>
        <div className="flex-1">
          {feature.mediaType === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-2xl w-full h-auto"
            >
              <source src={feature.media} type="video/webm" />
            </video>
          ) : (
            <Image
              src={feature.media}
              alt={feature.title}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}