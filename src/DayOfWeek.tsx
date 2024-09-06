import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnTo,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

type Day = ReturnTo<Dayjs['day'], ReturnTypeDay>

type DayValue = ToValue<Day>

type Props = DateConfigType & FunctionComponentProps<DayValue>

/**
 * @link https://day.js.org/docs/en/get-set/day
 */
export function DayOfWeek({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.day()}>{children}</Returns>
}
