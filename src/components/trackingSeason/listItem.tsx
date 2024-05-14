import Image from 'next/image'
import Text from '../themed/text'
import BorderImage from '#/border-laser.png'

export default function TrackingSeasonListItem({ item }: { item: any }) {
  return (
    <div className="bg-contain bg-season-item flex bg-layer2 border-4 border-BDlightblue">
      <Image src={item.image} width={200} height={100} alt={item.title} />
      <div>
        <Text var="h3">{item.title}</Text>
        <p>{item.description}</p>
        <span>{item.hint}</span>
      </div>
      <div className="relative flex-shrink-0">
        <Image
          src={BorderImage}
          width={20}
          height={185}
          alt="border"
          className="absolute left-0 top-1 bottom-1"
        />
        <Text var="span" className="text-8xl">
          {item.points}
        </Text>
        <Text var="span" className="text-">
          Points
        </Text>
      </div>
    </div>
  )
}
