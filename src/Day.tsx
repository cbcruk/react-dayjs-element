import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, ToValue } from './types'

type Day = ReturnType<typeof getDay>
type DayValue = ToValue<Day>

type Props = DateConfigType & FunctionComponentProps<DayValue>

function getDay(date: Dayjs) {
  return date.day()
}

export function Day({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getDay(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
