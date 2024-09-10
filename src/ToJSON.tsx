import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type ToJsonReturn = ReturnType<Dayjs['toJSON']>

type ToJsonValue = ToValue<ToJsonReturn>

type Props = DefaultProps<Children<ToJsonValue>>

/**
 * @link https://day.js.org/docs/en/display/as-json
 */
export function ToJSON({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.toJSON()}>{children}</Returns>}
    </UseDayjs>
  )
}
