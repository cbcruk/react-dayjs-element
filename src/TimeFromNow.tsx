import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

dayjs.extend(relativeTime)

type FromNow = Dayjs['fromNow']

type FromNowValue = ToValue<ReturnType<FromNow>>

type FromNowParams = {
  withoutSuffix: Parameter<FromNow>
}

type Props = DateConfigType &
  FromNowParams &
  FunctionComponentProps<FromNowValue>

/**
 * @link https://day.js.org/docs/en/display/from-now
 */
export function TimeFromNow({ date, withoutSuffix, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.fromNow(withoutSuffix)}>{children}</Returns>
}
