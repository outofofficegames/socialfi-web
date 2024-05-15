import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import StarIcon from '#/star-icon.svg'
import XIcon from '#/x-icon.svg'
import DiscordIcon from '#/discord-icon.svg'
import EmailIcon from '#/email-icon.svg'
import Interactor from '../themed/interactionChild'
import Image from 'next/image'
import Link from 'next/link'
import StrokedText from '../themed/strokedText'
import clsx from 'clsx'
const menuItems = [
  {
    image: XIcon,
    href: '/settings',
    title: 'X',
  },
  {
    image: DiscordIcon,
    href: '/settings2',
    title: 'Discord',
  },
  {
    image: EmailIcon,
    href: '/settings3',
    title: 'Email',
  },
]
export default function Menu() {
  return (
    <HeadlessMenu>
      <MenuButton>
        <Interactor
          icon={
            <Image src={StarIcon} width={40} height={40} alt="Login start" />
          }
          title="Login"
        />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className={
          'bg-white rounded-lg border-BDlightblue border-4 h-auto mt-4 p-6 flex flex-col gap-4'
        }
      >
        {menuItems.map((item, idx) => (
          <div key={item.href + item.title} className=" contents">
            <MenuItem>
              <Link
                className={clsx(
                  'flex justify-center data-[focus]:bg-blue-100 z-10 gap-6'
                )}
                href={item.href}
              >
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt={item.title}
                />
                <StrokedText var="span" className=" text-3xl uppercase">
                  {item.title}
                </StrokedText>
              </Link>
            </MenuItem>
            {idx === menuItems.length - 1 ? null : (
              <div className=" w-full h-[2px] bg-layer2" />
            )}
          </div>
        ))}
      </MenuItems>
    </HeadlessMenu>
  )
}
