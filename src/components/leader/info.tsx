import Image from 'next/image'
import ExcIcon from '#/exclamation-icon.svg'
export default function LeadersInfo() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={ExcIcon} height={38} width={19} alt="exclimation" />
      <p className=" text-BDyellow text-2xl">
        Leaderboard is refreshed every 15 minutes.
      </p>
    </div>
  )
}
