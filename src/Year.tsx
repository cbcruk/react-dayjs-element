import dayjs, { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'

type Year = ReturnNumber<Dayjs['year']>
type YearValue = ToValue<Year>

type Props = DateConfigType & FunctionComponentProps<YearValue>

export function Year({ date, children }: Partial<Props>) {
  const d = dayjs(date)

  if (!d.isValid()) {
    return null
  }

  const value = d.year()

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
