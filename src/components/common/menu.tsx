import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import StarIcon from '#/star-icon.svg'
import Interactor from '../themed/interactionChild'
import Image from 'next/image'

export default function Menu() {
  return (
    <HeadlessMenu>
      <MenuButton>
        <Interactor
          icon={
            <Image src={StarIcon} width={30} height={28} alt="Login start" />
          }
          title="Login"
        />
      </MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </HeadlessMenu>
  )
}
