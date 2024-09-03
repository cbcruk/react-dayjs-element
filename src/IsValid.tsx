import dayjs, { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, Value } from './types'

type IsValid = Dayjs['isValid']
type IsValidValue = Value<ReturnType<IsValid>>

type Props = DateConfigType & FunctionComponentProps<IsValidValue>

export function IsValid({ date, children }: Partial<Props>) {
  const value = dayjs(date).isValid()

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{JSON.stringify(value)}</>
}
