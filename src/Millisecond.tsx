import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ReturnTypeMillisecond = ReturnNumber<Dayjs['millisecond']>

type MillisecondValue = ToValue<ReturnTypeMillisecond>

type Props = DateConfigType & FunctionComponentProps<MillisecondValue>

/**
 * @link https://day.js.org/docs/en/get-set/millisecond
 */
export function Millisecond({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.millisecond()}>{children}</Returns>
}
