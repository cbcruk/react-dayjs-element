import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType, ToValue } from './types'

type Year = ReturnType<typeof getYear>
type YearValue = ToValue<Year>

type Props = DateConfigType & FunctionComponentProps<YearValue>

function getYear(d: Dayjs) {
  return d.year()
}

export function Year({ date, children }: Partial<Props>) {
  const d = dayjs(date)
  const value = getYear(d)

  if (!d.isValid()) {
    return null
  }

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
