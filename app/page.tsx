import clsx from 'clsx'
import { Jost } from 'next/font/google'

import Navbar from './components/Navbar'
import MiniNavbar from './components/MiniNavbar'
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
      <div className='bg-white px-16 xl:px-44'>
        <Hero />
        <div className='min-h-screen border-8 bg-theme-blue'></div>
      </div>
    </main>
  )
}
