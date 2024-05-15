'use client'
import clsx from 'clsx'
import Link from 'next/link'
import LeaderIcon from '#/leader-icon.png'
import MissonIcon from '#/mission-icon.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const navLinks = [
  {
    title: 'Missions',
    href: '/',
    image: MissonIcon,
  },
  {
    title: 'Leaders',
    href: '/leaders',
    image: LeaderIcon,
  },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="flex gap-10">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-4"
        >
          <Image src={item.image} alt={item.title} width={100} height={100} />
          <span
            className={clsx(
              'uppercase text-2xl',
              pathname === item.href
                ? 'border-b-4 border-BDpink text-BDpink'
                : ' text-BDlightblue'
            )}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  )
}
