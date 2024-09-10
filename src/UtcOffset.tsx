import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type UtcOffsetReturn = ReturnType<Dayjs['utcOffset']>

type UtcOffsetValue = ToValue<UtcOffsetReturn>

type Props = DefaultProps<Children<UtcOffsetValue>>

/**
 * @link https://day.js.org/docs/en/manipulate/utc-offset
 */
export function UtcOffset({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.utcOffset()}>{children}</Returns>}
    </UseDayjs>
  )
}
