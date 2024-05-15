import BorderImage from '#/border-laser.png'
import Image from 'next/image'
import Text from '../themed/text'
import Link from 'next/link'
import InteractionChild from '../themed/interactionChild'

export default function SeasonListItem({ item }: { item: any }) {
  return (
    <div className="bg-contain bg-seasonItem flex bg-layer1 bg-no-repeat border-4 border-BDlightblue items-center">
      <div className="flex items-center relative">
        <Image
          src={item.image}
          width={100}
          height={100}
          alt={item.title}
          className=" aspect-square m-4"
        />
        <p>
          <Text var="span">+{item.points}</Text>
          <Text var="span">Points</Text>
        </p>
      </div>
      <Image
        src={BorderImage}
        width={20}
        height={185}
        alt="border"
        className=" max-h-full"
      />
      <div>
        <Text var="h3">{item.title}</Text>
        <p>{item.description}</p>
        <span>{item.hint}</span>
      </div>
      <div className="relative flex-shrink-0 z-10">
        <Link href={'#'}>
          <InteractionChild title="Go!" />
        </Link>
      </div>
    </div>
  )
}
