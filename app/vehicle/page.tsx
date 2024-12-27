"use client"

import { Navbar } from "@/components/layout/navbar"
import { VehicleHero } from "@/components/vehicle/hero"
import { VehicleFeatures } from "@/components/vehicle/features"
import { VehicleShowcase } from "@/components/vehicle/showcase"
import { VehicleSpecs } from "@/components/vehicle/specs"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"

export default function VehiclePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <VehicleHero />
        <VehicleFeatures />
        <VehicleShowcase />
        <VehicleSpecs />
        <CTASection />
      </main>

      <footer className="bg-black/90 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://cdn.prod.website-files.com/674d73b06fb0202f972f9f66/67570e048034670baa7ba93f_Logo-aemotion.svg"
                alt="ÆMotion Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">Redefining urban mobility</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">contact@aemotion.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}