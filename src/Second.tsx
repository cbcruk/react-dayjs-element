import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, Value } from './types'

type Second = ReturnType<typeof getSecond>
type SecondValue = Value<Second>

type Props = DateConfigType & FunctionComponentProps<SecondValue>

function getSecond(date: Dayjs) {
  return date.second()
}

export function Second({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getSecond(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
