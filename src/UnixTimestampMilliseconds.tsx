import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type ValueOfReturn = ReturnType<Dayjs['valueOf']>

type ValueOfValue = ToValue<ValueOfReturn>

type Props = DefaultProps<Children<ValueOfValue>>

/**
 * @link https://day.js.org/docs/en/display/unix-timestamp-milliseconds
 */
export function UnixTimestampMilliseconds({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.valueOf()}>{children}</Returns>}
    </UseDayjs>
  )
}
