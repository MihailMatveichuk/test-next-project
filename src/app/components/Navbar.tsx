'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

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

  return (
    <nav>
        {navLinks.map((link, i) => {
            const isActive = pathname.split('/')[1] === link.href.split('/')[1];
            return (
                <Link 
                    key={i} 
                    href={link.href} 
                    className={isActive ? 'active' : ''}>{link.label}
                </Link>
            )
        })}
        {session?.data && (
            <Link href='/profile' className={pathname === '/profile' ? "active" : ''}>Profile</Link>
        )}
        {session?.data ? <Link href='#' onClick={() => signOut({callbackUrl: '/'})}>Sign Out</Link> : <Link href='/signin' className={pathname === '/signin' ? "active" : ''}>Sign In</Link>}
    </nav>
  )
}
