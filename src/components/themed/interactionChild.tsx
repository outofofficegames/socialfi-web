import clsx from 'clsx'
import Loader from './loader'
import StrokedText from './strokedText'
import BorderHighlight from '#/border-highlight.svg'
import Image from 'next/image'

export interface InteractionChildProps {
  isLoading?: boolean
  icon?: React.ReactNode
  title?: string
}
export default function InteractionChild({
  isLoading = false,
  icon = null,
  title,
}: InteractionChildProps) {
  return (
    <div className="inline-flex gap-1 relative px-10 py-3">
      <Image
        src={BorderHighlight}
        fill
        alt="border highligther"
        className={clsx(
          icon ? 'scale-y-[1.25] scale-x-[1.1]' : 'scale-y-[1.9] scale-x-[1.1]',
          'absolute -skew-x-6'
        )}
      />
      <div className="bg-gradient-to-b from-primary to-secondary  rounded-lg -skew-x-6 absolute inset-0 z-[-2]" />
      {isLoading ? <Loader size="md" tint="fill-white" /> : icon}
      <StrokedText
        var="span"
        className={clsx(isLoading && 'ml-1', 'uppercase text-2xl')}
      >
        {title}
      </StrokedText>
    </div>
  )
}
