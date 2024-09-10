import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type HourReturn = ReturnNumber<Dayjs['hour']>

type HourValue = ToValue<HourReturn>

type Props = DefaultProps<Children<HourValue>>

/**
 * @link https://day.js.org/docs/en/get-set/hour
 */
export function Hour({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.hour()}>{children}</Returns>}
    </UseDayjs>
  )
}
