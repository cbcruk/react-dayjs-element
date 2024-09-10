import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type ToISOStringReturn = ReturnType<Dayjs['toISOString']>

type ToISOStringValue = ToValue<ToISOStringReturn>

type Props = DefaultProps<Children<ToISOStringValue>>

/**
 * @link https://day.js.org/docs/en/display/as-iso-string
 */
export function ToISOString({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.toISOString()}>{children}</Returns>}
    </UseDayjs>
  )
}
