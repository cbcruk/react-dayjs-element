import dayjs, { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { useState } from 'react'

type ReturnTypeDate = ReturnNumber<Dayjs['date']>

type DateValue = ToValue<ReturnTypeDate>

type Props = DateConfigType & FunctionComponentProps<DateValue>

export function DateOfTheMonth({ date, children }: Partial<Props>) {
  const [d] = useState(() => dayjs(date))

  if (!d.isValid()) {
    return null
  }

  const value = d.date()

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
