'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type NavLink={
    label: string,
    href: string,
}

type Props = {
    navLinks: NavLink[]
}

export default function Navbar({navLinks}: Props) {
const pathname = usePathname()
  return (
    <nav>
        {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
                <Link 
                    key={i} 
                    href={link.href} 
                    className={isActive ? 'active' : ''}>{link.label}</Link>
            )
        })}
    </nav>
  )
}
