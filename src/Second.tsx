import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeSecond = ReturnNumber<Dayjs['second']>

type SecondValue = ToValue<ReturnTypeSecond>

type Props = DateConfigType & FunctionComponentProps<SecondValue>

/**
 * @link https://day.js.org/docs/en/get-set/second
 */
export function Second({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.second()}>{children}</Returns>
}
