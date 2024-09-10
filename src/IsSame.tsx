import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type IsSame = Dayjs['isSame']

type IsSameReturnType = ReturnType<IsSame>

type IsSameValue = ToValue<IsSameReturnType>

type IsSameParameters = Parameters<IsSame>

type IsSameParams = Required<IsSameParameters> extends [infer D, infer U]
  ? { date2: D; unit: U }
  : never

type Props = DateConfigType & IsSameParams & FunctionComponentProps<IsSameValue>

/**
 * @link https://day.js.org/docs/en/query/is-same
 */
export function IsSame({ date, date2, unit, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.isSame(date2, unit)}>{children}</Returns>
}
