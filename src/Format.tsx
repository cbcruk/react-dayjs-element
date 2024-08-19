import dayjs, { ConfigType } from 'dayjs'
import { Parameter } from './types'

type Props = {
  date?: ConfigType
  template?: Parameter<'format'>
}

export function Format({ date, template }: Props) {
  return <>{dayjs(date).format(template)}</>
}
