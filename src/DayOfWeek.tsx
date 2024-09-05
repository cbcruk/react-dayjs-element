import dayjs, { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnTo,
} from './types'
import { useState } from 'react'
import { isValidDate } from './utils'
import { Returns } from './Returns'

type ReturnTypeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

type Day = ReturnTo<Dayjs['day'], ReturnTypeDay>

type DayValue = ToValue<Day>

type Props = DateConfigType & FunctionComponentProps<DayValue>

export function DayOfWeek({ date, children }: Partial<Props>) {
  const [d] = useState(() => dayjs(date))

  if (!isValidDate(d)) {
    return null
  }

  return <Returns value={d.day()}>{children}</Returns>
}
