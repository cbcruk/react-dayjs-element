import dayjs, { Dayjs } from 'dayjs'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  Value,
} from './types'

type Format = Dayjs['format']
type FormatValue = Value<ReturnType<Format>>
type FormatParams = {
  template: Parameter<Format>
}

type Props = DateConfigType & FormatParams & FunctionComponentProps<FormatValue>

export function Format({ date, template, children }: Partial<Props>) {
  const value = dayjs(date).format(template)

  if (typeof children === 'function') {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
