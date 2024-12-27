"use client"

import Image from "next/image"
import Link from "next/link"

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://cdn.prod.website-files.com/674d73b06fb0202f972f9f66/67571057bd82697192749403_logomark-3.svg"
        alt="ÆMotion Logo"
        width={40}
        height={40}
        className="h-8 w-auto"
      />
    </Link>
  )
}