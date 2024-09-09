import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeDaysInMonth = ReturnNumber<Dayjs['daysInMonth']>

type DaysInMonthValue = ToValue<ReturnTypeDaysInMonth>

type Props = DateConfigType & FunctionComponentProps<DaysInMonthValue>

/**
 * @link https://day.js.org/docs/en/display/days-in-month
 */
export function DaysInMonth({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.daysInMonth()}>{children}</Returns>
}
