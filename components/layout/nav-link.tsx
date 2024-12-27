"use client"

import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-sm hover:text-purple-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}