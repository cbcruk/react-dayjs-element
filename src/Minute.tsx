import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ReturnTypeMinute = ReturnNumber<Dayjs['minute']>

type MinuteValue = ToValue<ReturnTypeMinute>

type Props = DateConfigType & FunctionComponentProps<MinuteValue>

/**
 * @link https://day.js.org/docs/en/get-set/minute
 */
export function Minute({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.minute()}>{children}</Returns>
}
