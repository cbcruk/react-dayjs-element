import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type IsValid = Dayjs['isValid']

type IsValidValue = ToValue<ReturnType<IsValid>>

type Props = Partial<DateConfigType> & FunctionComponentProps<IsValidValue>

/**
 * @link https://day.js.org/docs/en/parse/is-valid
 */
export function IsValidDate({ date, children }: Props) {
  const { isValidDate } = useDayjs({ date })

  return <Returns value={isValidDate}>{children}</Returns>
}
