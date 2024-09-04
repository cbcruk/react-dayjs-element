import dayjs, { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'

type IsValid = Dayjs['isValid']
type IsValidValue = ToValue<ReturnType<IsValid>>

type Props = DateConfigType & FunctionComponentProps<IsValidValue>

export function IsValid({ date, children }: Partial<Props>) {
  const value = dayjs(date).isValid()

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{JSON.stringify(value)}</>
}
