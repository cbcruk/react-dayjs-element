import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type SecondReturn = ReturnNumber<Dayjs['second']>

type SecondValue = ToValue<SecondReturn>

type Props = DefaultProps<Children<SecondValue>>

/**
 * @link https://day.js.org/docs/en/get-set/second
 */
export function Second({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.second()}>{children}</Returns>}
    </UseDayjs>
  )
}
