import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, ToValue } from './types'

type Date = ReturnType<typeof getDate>
type DateValue = ToValue<Date>

type Props = DateConfigType & FunctionComponentProps<DateValue>

function getDate(date: Dayjs) {
  return date.date()
}

export function Date({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getDate(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
