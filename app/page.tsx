import clsx from 'clsx'
import { Jost } from 'next/font/google'

import Navbar from './components/Navbar'
import MiniNavbar from './components/MiniNavbar'
import TextBlock from './components/TextBlock'
import Hero from './components/Hero'

const jost = Jost({
  display: 'swap',
  subsets: ['latin'],
})

const links = [
  {
    href: '/',
    label: 'About',
    primary: true,
  },
  {
    href: '/',
    label: 'Jobs',
  },
  {
    href: '/',
    label: 'apprenticeships',
  },
]

export default function Home() {
  return (
    <main className={clsx(jost.className)}>
      <Navbar />
      <MiniNavbar links={links} />
      <div className='px-base bg-white'>
        <Hero />
        <TextBlock
          paragraph1='We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.'
          paragraph2='Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.'
        />
      </div>
    </main>
  )
}
