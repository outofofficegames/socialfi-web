import Title from '@/components/themed/title'
import SeasonList from './list'
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
export default function Season() {
  return (
    <section>
      <Title title="Season #01" subtitle="8h 50min" />
      <SeasonList data={data} />
    </section>
  )
}
