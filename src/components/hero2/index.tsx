import Image from 'next/image'
import HeroImage from '#/hero2.png'

export default function Hero() {
  return (
    <section className="w-full max-w-5xl">
      <Image
        src={HeroImage}
        width={1280}
        height={500}
        alt="Battle Derby"
        className=" object-cover "
      />
    </section>
  )
}
