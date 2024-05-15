import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface StrokedTextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  content?: string
  var: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}
export default function StrokedText({
  content,
  type = 'primary',
  ...props
}: StrokedTextProps) {
  return (
    <div className="relative">
      <props.var
        {...props}
        className={clsx(
          props.className,
          type === 'primary' && 'text-stroke',
          type === 'tertiary'
            ? 'text-BDyellow'
            : type === 'quaternary'
              ? ' text-transparent'
              : 'text-white ',
          type === 'quaternary' &&
            'bg-gradient-to-b from-secondary via-primary to-secondary bg-clip-text'
        )}
      >
        {content || props.children}
        <span
          className={clsx(
            props.className,
            type === 'secondary'
              ? 'text-BDpink'
              : type === 'quaternary'
                ? 'text-[#3f1000]'
                : 'text-[#00126D]',
            'absolute  inset-[0.3rem] z-[-1]'
          )}
        >
          {content || props.children}
        </span>
      </props.var>
    </div>
  )
}
