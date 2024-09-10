import { Dayjs } from 'dayjs'
import { ToValue, ReturnTo, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type LocaleReturn = ReturnTo<Dayjs['locale'], string>

type LocaleValue = ToValue<LocaleReturn>

type Props = DefaultProps<Children<LocaleValue>>

/**
 * @link https://day.js.org/docs/en/durations/locale
 */
export function Locale({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.locale()}>{children}</Returns>}
    </UseDayjs>
  )
}
