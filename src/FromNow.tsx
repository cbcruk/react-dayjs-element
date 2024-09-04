import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'

dayjs.extend(relativeTime)

type FromNow = Dayjs['fromNow']
type FromNowValue = ToValue<ReturnType<FromNow>>
type FromNowParams = {
  withoutSuffix: Parameter<FromNow>
}

type Props = DateConfigType &
  FromNowParams &
  FunctionComponentProps<FromNowValue>

export function FromNow({ date, withoutSuffix, children }: Partial<Props>) {
  const value = dayjs(date).fromNow(withoutSuffix)

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
