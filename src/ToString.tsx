import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type ToStringReturn = ReturnType<Dayjs['toString']>

type ToStringValue = ToValue<ToStringReturn>

type Props = DefaultProps<Children<ToStringValue>>

/**
 * @link https://day.js.org/docs/en/display/as-string
 */
export function ToString({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.toString()}>{children}</Returns>}
    </UseDayjs>
  )
}
