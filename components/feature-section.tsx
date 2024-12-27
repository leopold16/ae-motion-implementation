"use client"

import { motion } from "framer-motion"
import { FeatureVideo } from "./features/feature-video"

export function FeatureSection() {
  const features = [
    {
      title: "Dynamic",
      description: "Exclusive tilting chassis with 35° lean angle",
      media: "https://cdn.prod.website-files.com/6755a09ff7d23a5d0603aa1c/6755ade81a56371c861643b2_2_accueil_Animation%20AEmotion%20rendu%20vitesse%20x2%200061-0140-transcode.webm",
    },
    {
      title: "Efficient",
      description: "79cm width for unmatched urban agility",
      media: "https://cdn.prod.website-files.com/6755a09ff7d23a5d0603aa1c/6755ae0e7e43f830d1218f43_4_accueil_Animation%20AEmotion%20rendu%20vitesse%20x2%200161-0240-transcode.webm",
    },
    {
      title: "Flexible",
      description: "Perfect integration into the urban environment",
      media: "https://cdn.prod.website-files.com/6755a09ff7d23a5d0603aa1c/6755ae167fa59365e2f9c6e6_5_accueil_Animation%20AEmotion%20rendu%20vitesse%20x2%200241-0300-transcode.webm",
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
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
            <div className="flex-1 aspect-video">
              <FeatureVideo src={feature.media} />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}