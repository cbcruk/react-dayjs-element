import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, ToValue } from './types'

type Hour = ReturnType<typeof getHour>
type HourValue = ToValue<Hour>

type Props = DateConfigType & FunctionComponentProps<HourValue>

function getHour(date: Dayjs) {
  return date.hour()
}

export function Hour({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getHour(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
