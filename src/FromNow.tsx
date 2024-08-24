import dayjs, { ConfigType } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { OptionalProps, Parameter } from './types'

dayjs.extend(relativeTime)

type Props = {
  date: ConfigType
  withoutSuffix: Parameter<'fromNow'>
}

export function FromNow({ date, withoutSuffix }: OptionalProps<Props>) {
  return <>{dayjs(date).fromNow(withoutSuffix)}</>
}
