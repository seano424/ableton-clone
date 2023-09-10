'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface MiniNavbarProps {
  links: {
    href: string
    label: string
    primary?: boolean
  }[]
}

export default function MiniNavbar({
  links,
}: MiniNavbarProps) {
  const [scrollPosition, setScrollPosition] =
    useState(0)

  const [isScrollingUp, setIsScrollingUp] =
    useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY)
      setIsScrollingUp(
        window.scrollY < scrollPosition
      )
    }

    window.addEventListener('scroll', onScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  })

  return (
    <div
      className={clsx(
        'sticky top-0 flex items-center gap-10 border-t-2 border-stone-100 bg-white px-5 py-4 capitalize xl:container lg:px-9',
        'transform transition-all duration-700 ease-in-out',
        scrollPosition > 400 &&
          !isScrollingUp &&
          '-translate-y-40 ease-in-out',
        scrollPosition > 10 ? 'z-50' : 'z-10'
      )}
    >
      {links.map(({ href, label, primary }) => (
        <Link
          className={clsx(
            primary && 'text-theme-orange',
            'text-sm xl:text-base'
          )}
          key={label}
          href={href}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
