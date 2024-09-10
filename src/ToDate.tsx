import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type ToDateReturn = ReturnType<Dayjs['toDate']>

type ToDateValue = ToValue<ToDateReturn>

type Props = DefaultProps<Children<ToDateValue>>

/**
 * @link https://day.js.org/docs/en/display/as-javascript-date
 */
export function ToDate({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.toDate()}>{children}</Returns>}
    </UseDayjs>
  )
}
