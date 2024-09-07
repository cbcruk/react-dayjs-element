import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type Diff = Dayjs['diff']

type DiffReturnType = ReturnType<Diff>

type DiffValue = ToValue<DiffReturnType>

type DiffParameters = Parameters<Diff>

type DiffParams =
  Required<DiffParameters> extends [infer D, infer U, infer F]
    ? { date2: D; unit: U; float: F }
    : never

type Props = DateConfigType & DiffParams & FunctionComponentProps<DiffValue>

/**
 * @link https://day.js.org/docs/en/display/difference
 */
export function Difference({
  date,
  date2,
  unit,
  float,
  children,
}: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.diff(date2, unit, float)}>{children}</Returns>
}
