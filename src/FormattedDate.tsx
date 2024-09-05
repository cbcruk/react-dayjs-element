import dayjs, { Dayjs } from 'dayjs'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'
import { isFunctionComponent } from './utils'

type Format = Dayjs['format']

type FormatValue = ToValue<ReturnType<Format>>

type FormatParams = {
  template: Parameter<Format>
}

type Props = DateConfigType & FormatParams & FunctionComponentProps<FormatValue>

export function FormattedDate({ date, template, children }: Partial<Props>) {
  const d = dayjs(date)

  if (!d.isValid()) {
    return null
  }

  const value = d.format(template)

  if (isFunctionComponent(children)) {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
