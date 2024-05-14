import clsx from 'clsx'
import { HTMLAttributes } from 'react'

interface TextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  content?: string
  var: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}
export default function Text({ content, ...props }: TextProps) {
  return (
    <div className="relative">
      <props.var
        {...props}
        className={clsx(props.className, ' text-white text-stroke')}
      >
        {content || props.children}
        <props.var
          className={clsx(
            props.className,
            'absolute text-layer2 left-[0.25rem] top-[0.25rem] z-[-1]'
          )}
        >
          {content || props.children}
        </props.var>
      </props.var>
    </div>
  )
}
