import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type IsBefore = Dayjs['isBefore']

type IsBeforeReturnType = ReturnType<IsBefore>

type IsBeforeValue = ToValue<IsBeforeReturnType>

type IsBeforeParameters = Parameters<IsBefore>

type IsBeforeParams = Required<IsBeforeParameters> extends [infer D, infer U]
  ? { date2: D; unit: U }
  : never

type Props = DateConfigType &
  IsBeforeParams &
  FunctionComponentProps<IsBeforeValue>

/**
 * @link https://day.js.org/docs/en/query/is-before
 */
export function IsBefore({ date, date2, unit, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.isBefore(date2, unit)}>{children}</Returns>
}
