import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, Value } from './types'

type Month = ReturnType<typeof getMonth>
type MonthValue = Value<Month>

type Props = DateConfigType & FunctionComponentProps<MonthValue>

function getMonth(date: Dayjs) {
  return date.month()
}

export function Month({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getMonth(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
