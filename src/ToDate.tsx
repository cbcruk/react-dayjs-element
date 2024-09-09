import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ToDate = Dayjs['toDate']

type ToDateReturnType = ReturnType<ToDate>

type ToDateValue = ToValue<ToDateReturnType>

type Props = DateConfigType & FunctionComponentProps<ToDateValue>

/**
 * @link https://day.js.org/docs/en/display/as-javascript-date
 */
export function ToDate({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.toDate()}>{children}</Returns>
}
