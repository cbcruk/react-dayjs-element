import { Dayjs } from 'dayjs'
import { ToValue, ReturnTo, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type DayReturn = 0 | 1 | 2 | 3 | 4 | 5 | 6

type DayValue = ToValue<ReturnTo<Dayjs['day'], DayReturn>>

type Props = DefaultProps<Children<DayValue>>

/**
 * @link https://day.js.org/docs/en/get-set/day
 */
export function DayOfWeek({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.day()}>{children}</Returns>}
    </UseDayjs>
  )
}
