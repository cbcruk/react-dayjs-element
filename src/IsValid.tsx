import dayjs, { Dayjs } from 'dayjs'
import { FC } from 'react'
import { DateConfigType } from './types'

type Props = DateConfigType & {
  children: FC<{ isValid: ReturnType<Dayjs['isValid']> }>
}

export function IsValid({ date, children }: Partial<Props>) {
  const isValid = dayjs(date).isValid()

  if (typeof children === 'function') {
    return <>{children({ isValid })}</>
  }

  return <>{JSON.stringify(isValid)}</>
}
