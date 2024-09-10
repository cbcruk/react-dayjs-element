import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

dayjs.extend(relativeTime)

type FromNow = Dayjs['fromNow']

type FromNowReturn = ReturnType<FromNow>

type FromNowValue = ToValue<FromNowReturn>

type FromNowParams = Required<Parameters<FromNow>> extends [infer W]
  ? { withoutSuffix: W }
  : never

type Props = DefaultProps<FromNowParams & Children<FromNowValue>>

/**
 * @link https://day.js.org/docs/en/display/from-now
 */
export function TimeFromNow({ children, withoutSuffix, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => (
        <Returns value={d.fromNow(withoutSuffix)}>{children}</Returns>
      )}
    </UseDayjs>
  )
}
