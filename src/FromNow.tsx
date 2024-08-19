import dayjs, { ConfigType } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Parameter } from './types'

dayjs.extend(relativeTime)

type Props = {
  date?: ConfigType
  withoutSuffix?: Parameter<'fromNow'>
}

export function FromNow({ date, withoutSuffix }: Props) {
  return <>{dayjs(date).fromNow(withoutSuffix)}</>
}
