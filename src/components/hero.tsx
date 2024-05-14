import Image from 'next/image'
import HeroImage from '#/hero.png'

export default function Hero() {
  return (
    <div className="h-[500px] w-full relative">
      <Image src={HeroImage} fill alt="Battle Derby" />
    </div>
  )
}
