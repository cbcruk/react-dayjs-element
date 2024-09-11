import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type IsBefore = Dayjs['isBefore']

type IsBeforeReturn = ReturnType<IsBefore>

type IsBeforeValue = ToValue<IsBeforeReturn>

type IsBeforeParameters = Parameters<IsBefore>

type IsBeforeParams =
  Required<IsBeforeParameters> extends [infer D, infer U]
    ? { date2: D; unit: U }
    : never

type Props = DefaultProps<IsBeforeParams & Children<IsBeforeValue>>

/**
 * @link https://day.js.org/docs/en/query/is-before
 */
export function IsBefore({ date2, unit, children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.isBefore(date2, unit)}>{children}</Returns>}
    </UseDayjs>
  )
}
