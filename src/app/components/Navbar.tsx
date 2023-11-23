'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

type NavLink={
    label: string,
    href: string,
}

type Props = {
    navLinks: NavLink[]
}

export default function Navbar({navLinks}: Props) {
const pathname = usePathname()
const session = useSession()
console.log(session);

  return (
    <nav>
        {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
                <Link 
                    key={i} 
                    href={link.href} 
                    className={isActive ? 'active' : ''}>{link.label}
                </Link>
            )
        })}
        {session?.data && (
            <Link href='/profile'>Profile</Link>
        )}
        {session?.data ? <Link href='#' onClick={() => signOut({callbackUrl: '/'})}>Sign Out</Link> : <Link href='/api/auth/signin'>Sign In</Link>}
    </nav>
  )
}
