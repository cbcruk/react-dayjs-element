import dayjs, { ConfigType } from 'dayjs'
import { OptionalProps, Parameter } from './types'

type Props = {
  date: ConfigType
  template: Parameter<'format'>
}

export function Format({ date, template }: OptionalProps<Props>) {
  return <>{dayjs(date).format(template)}</>
}
