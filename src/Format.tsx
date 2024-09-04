import dayjs, { Dayjs } from 'dayjs'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'

type Format = Dayjs['format']
type FormatValue = ToValue<ReturnType<Format>>
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
