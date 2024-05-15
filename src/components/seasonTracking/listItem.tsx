import Image from 'next/image'
import Text from '../themed/text'
import BorderImage from '#/border-laser.png'

export default function TrackingSeasonListItem({ item }: { item: any }) {
  return (
    <div className="bg-contain bg-trackingSeasonItem bg-no-repeat bg-layer1 flex border-4 border-BDlightblue items-center">
      <Image
        src={item.image}
        width={200}
        height={100}
        alt={item.title}
        // className=" m-4"
      />
      <div>
        <Text var="h3">{item.title}</Text>
        <p>{item.description}</p>
        <span>{item.hint}</span>
      </div>
      <Image
        src={BorderImage}
        width={20}
        height={185}
        alt="border"
        className="max-h-full"
      />
      <div className="relative flex-shrink-0">
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
