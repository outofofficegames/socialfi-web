import Title from '@/components/themed/sectionTitle'
import TrackingSeasonList from './list'
import HeroImage2 from '#/hero2.png'
const data = [
  {
    id: 'dfo8yhydsfg',
    image: HeroImage2,
    title: 'Name mission r1',
    description:
      'Get Our Attention! Earn points by getting engagement from our 2 main accounts!',
    hint: 'Refered Code - for influencers: TX256$',
    points: 150,
  },
  {
    id: '094556bdf',
    image: HeroImage2,

    title: 'Name mission r2',
    description: 'Invite Friend: Pimp your friend and get 20 Points invitation',
    hint: 'Refered Code - for influencers: TX256$',
    points: 250,
  },
  {
    id: '!@#ndsvfj',
    title: 'Name mission r3',
    image: HeroImage2,
    description:
      'Mention Us: Create & share posts that mention #BattleDerby and @BattleDerbyGame',
    hint: 'Refered Code - for influencers: TX256$',
    points: 350,
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
