import { FC } from 'react'
import { Dayjs } from 'dayjs'

export function isFunctionComponent<T>(children?: FC<T>) {
  return typeof children === 'function'
}

export function isValidDate(d: Dayjs) {
  return d.isValid()
}
