import Title from '@/components/themed/sectionTitle'
import SeasonList from './list'
import Discord from '#/discord-icon.svg'
import XIcon from '#/x-icon.svg'
const data = [
  {
    id: 'dfsgiu89',
    image: Discord,
    title: 'Connect Discord',
    description: 'Lorem ipsum dolor successful shots lorem ipsum dolor',
    points: 50,
  },
  {
    id: 'kjbdfg785v2',
    image: XIcon,

    title: 'Connect X',
    description: 'Lorem ipsum dolor successful shots lorem ipsum dolor',
    points: 50,
  },
  {
    id: 'df09lknm',
    title: 'Join Discord',
    image: Discord,
    description: 'Lorem ipsum dolor successful shots lorem ipsum dolor',
    points: 100,
  },
  {
    id: '123asdxvc',
    image: XIcon,
    title: 'Follow BD on X',
    description: 'Lorem ipsum dolor successful shots lorem ipsum dolor',
    points: 150,
  },
  {
    id: 'ghnr6709',
    image: XIcon,
    title: 'Subscribe YT',
    points: 150,
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
