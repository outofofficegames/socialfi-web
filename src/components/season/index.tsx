import Title from '@/components/themed/sectionTitle'
import SeasonList from './list'
import Discord from '#/discord-icon.svg'
const data = [
  {
    id: 1,
    image: Discord,
    title: 'Name mission r1',
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 15,
  },
  {
    id: 2,
    image: Discord,

    title: 'Name mission r2',
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 15,
  },
  {
    id: 2,
    title: 'Name mission r3',
    image: Discord,
    description:
      'Make 150 successful shots lorem ipsum dolor successful shots lorem ipsum dolor',
    hint: 'Make 150 successful shots lorem ipsum dolor',
    points: 15,
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
