import dayjs, { Dayjs } from 'dayjs'
import { DateConfigType, Parameter } from './types'

type Format = Dayjs['format']

type Template = Parameter<Format>

type Props = DateConfigType & {
  template: Template
}

export function Format({ date, template }: Partial<Props>) {
  return <>{dayjs(date).format(template)}</>
}
