import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '#/logo.png'
import Nav from './nav'
import Menu from './menu'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href={'/'}>
        <Image src={LogoImage} width={206} height={83} alt="Triple O Games" />
      </Link>
      <Nav />
      <div className="w-[206px] flex justify-end">
        <Menu />
      </div>
    </header>
  )
}
