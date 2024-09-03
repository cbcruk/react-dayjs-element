import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, Value } from './types'

type Minute = ReturnType<typeof getMinute>
type MinuteValue = Value<Minute>

type Props = DateConfigType & FunctionComponentProps<MinuteValue>

function getMinute(date: Dayjs) {
  return date.minute()
}

export function Minute({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getMinute(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
