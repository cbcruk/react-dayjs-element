import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, DefaultProps, Children } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type MonthReturn = ReturnNumber<Dayjs['month']>

type MonthValue = ToValue<MonthReturn>

type Props = DefaultProps<Children<MonthValue>>

/**
 * @link https://day.js.org/docs/en/get-set/month
 */
export function Month({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.month()}>{children}</Returns>}
    </UseDayjs>
  )
}
