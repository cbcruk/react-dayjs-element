import { FC } from 'react'

export function isFunctionComponent<T>(children?: FC<T>) {
  return typeof children === 'function'
}
