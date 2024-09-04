import dayjs, { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnTo,
} from './types'
import { useState } from 'react'

type ReturnTypeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

type Day = ReturnTo<Dayjs['day'], ReturnTypeDay>

type DayValue = ToValue<Day>

type Props = DateConfigType & FunctionComponentProps<DayValue>

export function DayOfTheWeek({ date, children }: Partial<Props>) {
  const [d] = useState(() => dayjs(date))

  if (!d.isValid()) {
    return null
  }

  const value = d.day()

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
