import Hero2 from '@/components/hero2'
import Leaders from '@/components/leader'

export default function LeadersPage() {
  return (
    <>
      <Hero2 />
      <div className="mb-24" />
      <div className="z-10">
        <Leaders />
      </div>
      <div className=" bg-gradient-to-b from-transparent via-BDlightblue/20 to-transparent absolute inset-y-0 inset-x-[-10%] z-[-1]" />
    </>
  )
}
