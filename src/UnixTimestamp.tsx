import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type UnixReturn = ReturnType<Dayjs['unix']>

type UnixValue = ToValue<UnixReturn>

type Props = DefaultProps<Children<UnixValue>>

/**
 * @link https://day.js.org/docs/en/display/unix-timestamp
 */
export function UnixTimestamp({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.unix()}>{children}</Returns>}
    </UseDayjs>
  )
}
