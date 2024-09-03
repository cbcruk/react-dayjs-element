import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, Value } from './types'

type Year = ReturnType<typeof getYear>
type YearValue = Value<Year>

type Props = DateConfigType & FunctionComponentProps<YearValue>

function getYear(date: Dayjs) {
  return date.year()
}

export function Year({ date, children }: Partial<Props>) {
  const value = getYear(dayjs(date))

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
