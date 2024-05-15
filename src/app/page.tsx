import Hero from '@/components/hero'
import TrackingSeason from '@/components/seasonTracking'
import Season from '@/components/season'

export default function Home() {
  return (
    <>
      <Hero />
      <TrackingSeason />
      <div className="mb-32" />
      <Season />
    </>
  )
}
