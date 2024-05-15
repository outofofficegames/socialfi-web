import Title from '@/components/themed/sectionTitle'
import TrackingSeasonList from './list'
import HeroImage2 from '#/hero2.png'
const data = [
  {
    id: 1,
    image: HeroImage2,
    title: 'Name mission r1',
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 5,
  },
  {
    id: 2,
    image: HeroImage2,

    title: 'Name mission r2',
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 5,
  },
  {
    id: 2,
    title: 'Name mission r3',
    image: HeroImage2,
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 5,
  },
]
export default function TrackingSesson() {
  return (
    <section>
      <Title title="Tracking Season" />
      <TrackingSeasonList data={data} />
    </section>
  )
}
