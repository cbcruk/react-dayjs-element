import dayjs, { Dayjs } from 'dayjs'
import { FunctionComponentProps, DateConfigType } from './types'

type GetYear = typeof getYear

type Year = ReturnType<GetYear>

type Props = DateConfigType &
  FunctionComponentProps<{
    year: Year
  }>

function getYear(date: Dayjs) {
  return date.year()
}

export function Year({ date, children }: Partial<Props>) {
  const year = getYear(dayjs(date))

  if (typeof children === 'function') {
    return <>{children({ year })}</>
  }

  return <>{year}</>
}
