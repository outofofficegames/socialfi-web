import SeasonListItem from './listItem'

export default function SeasonList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {data.map((item) => (
        <SeasonListItem item={item} key={item.id} />
      ))}
    </div>
  )
}
