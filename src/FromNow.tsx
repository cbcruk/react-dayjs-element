import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { DateConfigType, Parameter } from './types'

dayjs.extend(relativeTime)

type FromNow = Dayjs['fromNow']

type WithoutSuffix = Parameter<FromNow>

type Props = DateConfigType & {
  withoutSuffix: WithoutSuffix
}

export function FromNow({ date, withoutSuffix }: Partial<Props>) {
  return <>{dayjs(date).fromNow(withoutSuffix)}</>
}
