import StrokedText from '../themed/strokedText'
import LeaderListItem from './listItem'
const tableHeads = ['rank', 'name', 'invited by', 'points']
export default function LeaderList({ data }: { data: any[] }) {
  return (
    <table className="table flex-col gap-6 w-full max-w-5xl mx-auto ">
      <thead className=" border-BDlightblue border-b-4">
        <tr>
          {tableHeads.map((title) => (
            <th key={title + '_leaderTitle'} className="text-left">
              <StrokedText var="h4" className="uppercase text-xl">
                {title}
              </StrokedText>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <LeaderListItem
            item={{ ...item, rank: idx + 1 }}
            key={item.name + '_leaderItem_' + item.inviter}
          />
        ))}
      </tbody>
    </table>
  )
}
