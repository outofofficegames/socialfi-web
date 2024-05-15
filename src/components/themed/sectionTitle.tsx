import Image from 'next/image'
import TitleBG from '#/title-bg.png'
import BorderHorizontal from '#/border-laser-horizontal.png'
import ClockIcon from '#/clock-icon.svg'
import StrokedText from './strokedText'
export default function Title({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="-rotate-2 relative mb-24">
      <StrokedText
        var="h2"
        type="secondary"
        className=" text-5xl uppercase text-center"
      >
        {title}
      </StrokedText>
      <Image
        src={BorderHorizontal}
        width={529}
        height={43}
        alt={'title border'}
        className="z-[-2]  absolute -top-12 left-[50%] ml-[-265px]"
      />
      <Image
        src={TitleBG}
        width={670}
        height={75}
        alt={'title line'}
        className="z-[-2]  absolute -top-3 left-[50%] ml-[-335px]"
      />
      <Image
        src={BorderHorizontal}
        width={529}
        height={43}
        alt={'title border'}
        className="z-[-2]  absolute -bottom-12 left-[50%] ml-[-265px]"
      />
      {subtitle && (
        <div className="flex gap-2 absolute w-full -bottom-[22px] items-center justify-center">
          <Image src={ClockIcon} width={20} height={20} alt="count-down" />
          <span className="text-xl"> {subtitle}</span>
        </div>
      )}
    </div>
  )
}
