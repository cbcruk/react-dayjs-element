import dayjs, { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps } from './types'

type Props = DateConfigType &
  FunctionComponentProps<{
    isValid: ReturnType<Dayjs['isValid']>
  }>

export function IsValid({ date, children }: Partial<Props>) {
  const isValid = dayjs(date).isValid()

  if (typeof children === 'function') {
    return <>{children({ isValid })}</>
  }

  return <>{JSON.stringify(isValid)}</>
}
