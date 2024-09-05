import { FC } from 'react'
import { isFunctionComponent } from './utils'
import { ToValue } from './types'

export type ReturnsProps<T> = {
  value: T
  children?: FC<ToValue<T>>
}

export function Returns<T>({ value, children }: ReturnsProps<T>) {
  if (isFunctionComponent(children)) {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
