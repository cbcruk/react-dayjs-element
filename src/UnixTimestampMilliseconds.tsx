import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ValueOf = Dayjs['valueOf']

type ValueOfReturnType = ReturnType<ValueOf>

type ValueOfValue = ToValue<ValueOfReturnType>

type Props = DateConfigType & FunctionComponentProps<ValueOfValue>

/**
 * @link https://day.js.org/docs/en/display/unix-timestamp-milliseconds
 */
export function UnixTimestampMilliseconds({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.valueOf()}>{children}</Returns>
}
