import clsx from 'clsx'
import Link from 'next/link'
import LeaderIcon from '#/leader-icon.png'
import MissonIcon from '#/mission-icon.png'
import Image from 'next/image'
const navLinks = [
  {
    title: 'Missions',
    href: '/',
    color: 'text-BDlightblue',
    image: MissonIcon,
  },
  {
    title: 'Leaders',
    href: '/leaders',
    color: 'text-BDpink',
    image: LeaderIcon,
  },
]

export default function Nav() {
  return (
    <nav className="flex gap-10">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          className={clsx(
            'uppercase text-2xl flex items-center gap-4',
            item.color
          )}
          href={item.href}
        >
          <Image src={item.image} alt={item.title} width={100} height={100} />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
