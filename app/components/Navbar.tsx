'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import Link from 'next/link';

const links = [
  {
    href: '/',
    label: 'live',
  },
  {
    href: '/',
    label: 'push',
  },
  {
    href: '/',
    label: 'note',
  },
  {
    href: '/',
    label: 'link',
  },
  {
    href: '/',
    label: 'shop',
  },
  {
    href: '/',
    label: 'packs',
  },
  {
    href: '/',
    label: 'help',
  },
];

const onAbletonLinks = [
  {
    href: '/',
    label: 'Blog',
  },
  {
    href: '/',
    label: 'Ableton for the classroom',
  },
  {
    href: '/',
    label:
      'Ableton for colleges and universities',
  },
  {
    href: '/',
    label: 'Certified training',
  },
  {
    href: '/',
    label: 'About ableton',
    primary: true,
  },
  {
    href: '/',
    label: 'Jobs',
  },
  {
    href: '/',
    label: 'Apprenticeships',
  },
];

const fromAbletonLinks = [
  {
    href: '/',
    label: 'Loop',
    sublabel:
      "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
  },
  {
    href: '/',
    label: 'Learning Music',
    sublabel:
      'Learn the fundamentals of music making right in your browser.',
  },
  {
    href: '/',
    label: 'Learning Synths',
    sublabel:
      'Get started with synthesis using a web-based synth and accompanying lessons.',
  },
  {
    href: '/',
    label: 'Making Music',
    sublabel:
      'Some tips from 74 Creative Strategies for Electronic Producers.',
  },
];

function Navbar() {
  const [isMegaMenuOpen, setMegaMenuOpen] =
    useState(false);
  return (
    <nav className='flex flex-col gap-10 border-b border-stone-100 py-3'>
      <div className='flex items-center justify-between'>
        <ul className='flex items-center gap-10'>
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
              setMegaMenuOpen(
                (prevState) => !prevState
              )
            }
            className='text-theme-orange flex items-center gap-2 text-lg capitalize'
          >
            More{' '}
            <span>
              {isMegaMenuOpen ? (
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
        </ul>
        <ul className='flex items-center gap-10'>
          <Link
            className='text-theme-blue text-lg'
            href={'/'}
          >
            Try Live For Free
          </Link>
          <Link className='text-sm' href={'/'}>
            Log in or register
          </Link>
        </ul>
      </div>
      <div
        className={clsx(
          !isMegaMenuOpen && 'hidden',
          'flex flex-col gap-10'
        )}
      >
        <div className='flex flex-col gap-5'>
          <h4 className='text-3xl font-medium'>
            More on Ableton.com:
          </h4>
          <ul className='flex gap-10 text-lg capitalize text-gray-600'>
            {onAbletonLinks.map(
              ({ href, label, primary }) => (
                <Link
                  className={clsx(
                    primary && 'text-theme-orange'
                  )}
                  href={href}
                >
                  {label}
                </Link>
              )
            )}
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-3xl font-medium'>
            More from Ableton:
          </h4>
          <ul className='flex gap-10'>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
