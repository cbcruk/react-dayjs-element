import dayjs, { ConfigType, Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type Props = {
  date?: ConfigType
  withoutSuffix?: Parameters<Dayjs['fromNow']>[0]
}

export function FromNow({ date, withoutSuffix }: Props) {
  return <>{dayjs(date).fromNow(withoutSuffix)}</>
}
