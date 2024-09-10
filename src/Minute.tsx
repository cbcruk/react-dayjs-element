import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type MinuteReturn = ReturnNumber<Dayjs['minute']>

type MinuteValue = ToValue<MinuteReturn>

type Props = DefaultProps<Children<MinuteValue>>

/**
 * @link https://day.js.org/docs/en/get-set/minute
 */
export function Minute({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.minute()}>{children}</Returns>}
    </UseDayjs>
  )
}
