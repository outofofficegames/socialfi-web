import Image from 'next/image'
import StrokedText from '../themed/strokedText'
import BorderImage from '#/border-laser.png'

export default function TrackingSeasonListItem({ item }: { item: any }) {
  return (
    <div className="bg-cover bg-trackingSeasonItem bg-no-repeat gap-6 bg-layer1 flex border-4 border-BDlightblue items-center">
      <Image src={item.image} width={200} height={100} alt={item.title} />
      <div className="flex flex-col gap-4 z-10">
        <StrokedText var="h3" className="text-5xl">
          {item.title}
        </StrokedText>
        <p className="text-xl">{item.description}</p>
        <span className="text-sm text-BDlightblue">{item.hint}</span>
      </div>
      <div>
        <Image
          src={BorderImage}
          width={20}
          height={185}
          alt="border"
          className="max-h-full"
        />
      </div>
      <div className="relative flex-shrink-0 pr-6 z-10">
        <StrokedText var="span" className="text-8xl">
          {item.points}
        </StrokedText>
        <StrokedText var="span" className="text-4xl uppercase">
          Points
        </StrokedText>
      </div>
    </div>
  )
}
