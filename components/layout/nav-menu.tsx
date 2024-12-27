"use client"

import { Button } from "@/components/ui/button"
import { NavLink } from "./nav-link"
import { MobileMenu } from "./mobile-menu"

export function NavMenu() {
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/vehicle">Vehicle</NavLink>
        <Button 
          variant="outline" 
          className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
        >
          Join the Adventure
        </Button>
      </div>
      <MobileMenu />
    </>
  )
}