import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ToISOString = Dayjs['toISOString']

type ToISOStringReturnType = ReturnType<ToISOString>

type ToISOStringValue = ToValue<ToISOStringReturnType>

type Props = DateConfigType & FunctionComponentProps<ToISOStringValue>

/**
 * @link https://day.js.org/docs/en/display/as-iso-string
 */
export function ToISOString({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.toISOString()}>{children}</Returns>
}
