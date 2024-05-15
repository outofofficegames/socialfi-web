import BorderImage from '#/border-laser.png'
import Image from 'next/image'
import StrokedText from '../themed/strokedText'
import Link from 'next/link'
import InteractionChild from '../themed/interactionChild'

export default function SeasonListItem({ item }: { item: any }) {
  return (
    <div className="bg-cover bg-seasonItem flex bg-layer1 gap-6 bg-no-repeat border-4 border-BDlightblue items-center">
      <div className="flex items-center relative flex-shrink-0">
        <Image
          src={item.image}
          width={100}
          height={100}
          alt={item.title}
          className="aspect-square"
        />
        <p className="z-10">
          <StrokedText var="span" className=" text-5xl">
            +{item.points}
          </StrokedText>
          <StrokedText var="span" className="uppercase text-xl">
            Points
          </StrokedText>
        </p>
      </div>
      <div>
        <Image src={BorderImage} width={20} height={185} alt="border" />
      </div>
      <div className="flex flex-col gap-4 z-20 relative">
        <StrokedText var="h3" className="text-5xl">
          {item.title}
        </StrokedText>
        <p className="text-xl">{item.description}</p>
      </div>
      <div className="relative flex-shrink-0 z-10 pr-6">
        <Link href={'#'}>
          <InteractionChild title="Go!" />
        </Link>
      </div>
    </div>
  )
}
