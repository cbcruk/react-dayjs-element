import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type DaysInMonthReturn = ReturnNumber<Dayjs['daysInMonth']>

type DaysInMonthValue = ToValue<DaysInMonthReturn>

type Props = DefaultProps<Children<DaysInMonthValue>>

/**
 * @link https://day.js.org/docs/en/display/days-in-month
 */
export function DaysInMonth({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.daysInMonth()}>{children}</Returns>}
    </UseDayjs>
  )
}
