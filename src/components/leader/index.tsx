import LeadersInfo from './info'
import LeaderList from './list'
const data = [
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
  {
    name: 'Username',
    inviter: 'User2024',
    points: 19990,
  },
]
export default function Leaders() {
  return (
    <section>
      <LeaderList data={data} />
      <div className="mb-24" />
      <LeadersInfo />
    </section>
  )
}
