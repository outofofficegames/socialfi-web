import Image from 'next/image'
import LogoImage from '#/logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center flex-col py-8 gap-8">
      <p className=" text-white/40 text-sm text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod
        <br />
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
        nisl ut aliquip ex ea <br />
        commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore
      </p>
      <Link href="/">
        <Image
          src={LogoImage}
          width={192}
          height={77}
          alt="Triple O Games logo"
          className=" opacity-40"
        />
      </Link>
    </footer>
  )
}
