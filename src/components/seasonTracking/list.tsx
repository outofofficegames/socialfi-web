import TrackingSeasonListItem from './listItem'

export default function TrackingSeasonList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {data.map((item) => (
        <TrackingSeasonListItem item={item} key={item.id} />
      ))}
    </div>
  )
}
