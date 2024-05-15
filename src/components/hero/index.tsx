import Image from 'next/image'
import HeroImage from '#/hero.png'

export default function Hero() {
  return (
    <section className="h-[500px] w-full">
      <Image src={HeroImage} width={1280} height={500} alt="Battle Derby" />
    </section>
  )
}
