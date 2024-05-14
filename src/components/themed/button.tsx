import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { Button as HeadlessButton } from '@headlessui/react'
import InteractionChild, { InteractionChildProps } from './interactionChild'

interface ButtonProps
  extends InteractionChildProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  isLoading,
  icon = null,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      {...props}
      disabled={props.disabled || isLoading}
      className={clsx(props.className, '')}
    >
      <InteractionChild icon={icon} title={props.title} isLoading={isLoading} />
    </HeadlessButton>
  )
}
