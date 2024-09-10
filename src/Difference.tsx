import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type Diff = Dayjs['diff']

type DiffReturn = ReturnType<Diff>

type DiffValue = ToValue<DiffReturn>

type DiffParameters = Parameters<Diff>

type DiffParams = Required<DiffParameters> extends [infer D, infer U, infer F]
  ? { date2: D; unit: U; float: F }
  : never

type Props = DefaultProps<DiffParams & Children<DiffValue>>

/**
 * @link https://day.js.org/docs/en/display/difference
 */
export function Difference({ date2, unit, float, children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => (
        <Returns value={d.diff(date2, unit, float)}>{children}</Returns>
      )}
    </UseDayjs>
  )
}
