import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeHour = ReturnNumber<Dayjs['hour']>

type HourValue = ToValue<ReturnTypeHour>

type Props = DateConfigType & FunctionComponentProps<HourValue>

/**
 * @link https://day.js.org/docs/en/get-set/hour
 */
export function Hour({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.hour()}>{children}</Returns>
}
