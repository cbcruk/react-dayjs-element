import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type IsValidReturn = ReturnType<Dayjs['isValid']>

type IsValidValue = ToValue<IsValidReturn>

type Props = DefaultProps<Children<IsValidValue>>

/**
 * @link https://day.js.org/docs/en/parse/is-valid
 */
export function IsValidDate({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ isValidDate }) => <Returns value={isValidDate}>{children}</Returns>}
    </UseDayjs>
  )
}
