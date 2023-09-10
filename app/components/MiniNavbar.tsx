import clsx from 'clsx'
import Link from 'next/link'

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
  return (
    <ul className='relative mt-[2px] flex items-center gap-10 bg-white px-5 py-5 capitalize xl:container lg:px-8'>
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
    </ul>
  )
}
