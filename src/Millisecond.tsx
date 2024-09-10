import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type MillisecondReturn = ReturnNumber<Dayjs['millisecond']>

type MillisecondValue = ToValue<MillisecondReturn>

type Props = DefaultProps<Children<MillisecondValue>>

/**
 * @link https://day.js.org/docs/en/get-set/millisecond
 */
export function Millisecond({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.millisecond()}>{children}</Returns>}
    </UseDayjs>
  )
}
