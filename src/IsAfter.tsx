import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type IsAfter = Dayjs['isAfter']

type IsAfterReturn = ReturnType<IsAfter>

type IsAfterValue = ToValue<IsAfterReturn>

type IsAfterParameters = Parameters<IsAfter>

type IsAfterParams =
  Required<IsAfterParameters> extends [infer D, infer U]
    ? { date2: D; unit: U }
    : never

type Props = DefaultProps<IsAfterParams & Children<IsAfterValue>>

/**
 * @link https://day.js.org/docs/en/query/is-after
 */
export function IsAfter({ date2, unit, children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.isAfter(date2, unit)}>{children}</Returns>}
    </UseDayjs>
  )
}
