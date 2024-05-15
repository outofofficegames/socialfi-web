import Image, { StaticImageData } from 'next/image'
import StrokedText from '../themed/strokedText'
import Rank1 from '#/rank-1st.png'
import Rank2 from '#/rank-2nd.png'
import Rank3 from '#/rank-3rd.png'
import RankCommon from '#/rank-normal.png'
import clsx from 'clsx'
const Tcell = ({
  val,
  type,
}: {
  val: string
  type?: 'primary' | 'tertiary'
}) => (
  <td>
    <StrokedText var="span" className="text-3xl" type={type}>
      {val}
    </StrokedText>
  </td>
)
const rankMap: { [key: number]: StaticImageData } = {
  1: Rank1,
  2: Rank2,
  3: Rank3,
  4: RankCommon,
}
export default function SeasonListItem({ item }: { item: any }) {
  return (
    <tr className="mb-4">
      <td>
        <div className="flex items-center justify-center relative h-[72px] w-[72px]">
          <span className={clsx(item.rank < 4 && 'mt-3', 'text-2xl')}>
            {item.rank}
          </span>
          <Image
            src={rankMap[item.rank] ?? RankCommon}
            alt="rank"
            fill
            className="absolute z-[-1]"
          />
        </div>
      </td>
      <Tcell val={item.name} />
      <Tcell val={item.inviter} />
      <Tcell type="tertiary" val={item.points} />
    </tr>
  )
}
