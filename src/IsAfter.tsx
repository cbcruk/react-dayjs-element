import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type IsAfter = Dayjs['isAfter']

type IsAfterReturnType = ReturnType<IsAfter>

type IsAfterValue = ToValue<IsAfterReturnType>

type IsAfterParameters = Parameters<IsAfter>

type IsAfterParams = Required<IsAfterParameters> extends [infer D, infer U]
  ? { date2: D; unit: U }
  : never

type Props = DateConfigType &
  IsAfterParams &
  FunctionComponentProps<IsAfterValue>

/**
 * @link https://day.js.org/docs/en/query/is-after
 */
export function IsAfter({ date, date2, unit, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.isAfter(date2, unit)}>{children}</Returns>
}
