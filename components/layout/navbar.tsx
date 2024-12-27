"use client"

import { NavLogo } from "./nav-logo"
import { NavMenu } from "./nav-menu"

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLogo />
          <NavMenu />
        </div>
      </div>
    </nav>
  )
}