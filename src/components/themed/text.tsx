import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface TextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  content?: string
  var: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type?: 'primary' | 'secondary'
}
export default function Text({
  content,
  type = 'primary',
  ...props
}: TextProps) {
  return (
    <div className="relative">
      <props.var
        {...props}
        className={clsx(
          props.className,
          type === 'primary' && 'text-stroke',
          ' text-white '
        )}
      >
        {content || props.children}
        <span
          className={clsx(
            props.className,
            type === 'primary' ? 'text-layer2' : 'text-BDpink',
            'absolute  inset-[0.25rem] z-[-1]'
          )}
        >
          {content || props.children}
        </span>
      </props.var>
    </div>
  )
}
