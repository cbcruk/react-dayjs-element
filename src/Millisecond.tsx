import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, ToValue } from './types'

type Millisecond = ReturnType<typeof getMillisecond>
type MillisecondValue = ToValue<Millisecond>

type Props = DateConfigType & FunctionComponentProps<MillisecondValue>

function getMillisecond(date: Dayjs) {
  return date.millisecond()
}

export function Millisecond({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getMillisecond(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
