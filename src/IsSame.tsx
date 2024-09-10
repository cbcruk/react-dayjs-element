import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type IsSame = Dayjs['isSame']

type IsSameReturn = ReturnType<IsSame>

type IsSameValue = ToValue<IsSameReturn>

type IsSameParameters = Parameters<IsSame>

type IsSameParams = Required<IsSameParameters> extends [infer D, infer U]
  ? { date2: D; unit: U }
  : never

type Props = DefaultProps<IsSameParams & Children<IsSameValue>>

/**
 * @link https://day.js.org/docs/en/query/is-same
 */
export function IsSame({ date2, unit, children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.isSame(date2, unit)}>{children}</Returns>}
    </UseDayjs>
  )
}
