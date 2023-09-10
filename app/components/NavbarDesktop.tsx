'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import {
  links,
  fromAbletonLinks,
  onAbletonLinks,
} from '../lib/navLinks'

export default function NavbarDesktop() {
  const [isDesktopMenuOpen, setDesktopMenuOpen] =
    useState(false)
  return (
    <>
      <div className='hidden items-center justify-between xl:flex'>
        <div className='flex items-center gap-10'>
          <Link href='/'>
            <svg
              aria-hidden='true'
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-16'
              width='45'
              height='21'
              viewBox='0 0 45 21'
            >
              <path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
            </svg>
          </Link>
          {links.map(({ href, label }) => (
            <Link
              className='text-lg capitalize'
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() =>
              setDesktopMenuOpen(
                (prevState) => !prevState
              )
            }
            className='flex items-center gap-2 text-lg capitalize text-theme-orange'
          >
            More{' '}
            <span>
              {isDesktopMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19.5 12h-15'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className='flex items-center gap-10'>
          <Link
            className='text-lg text-theme-blue'
            href={'/'}
          >
            Try Live For Free
          </Link>
          <Link className='text-sm' href={'/'}>
            Log in or register
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          !isDesktopMenuOpen && 'xl:hidden',
          'hidden flex-col gap-10 xl:flex'
        )}
      >
        <div className='flex flex-col gap-4'>
          <h4 className='text-3xl'>
            More on Ableton.com:
          </h4>
          <div className='flex gap-10 text-lg capitalize text-gray-600'>
            {onAbletonLinks.map(
              ({ href, label, primary }) => (
                <Link
                  key={label}
                  className={clsx(
                    primary && 'text-theme-orange'
                  )}
                  href={href}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-3xl'>
            More from Ableton:
          </h4>
          <div className='flex gap-10'>
            {fromAbletonLinks.map(
              ({ href, label, sublabel }) => (
                <Link
                  href={href}
                  className='flex flex-col'
                >
                  <span className='text-lg font-medium'>
                    {label}
                  </span>
                  <span className='text-lg text-gray-600'>
                    {sublabel}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
