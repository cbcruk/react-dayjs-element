import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnTo,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeLocale = ReturnTo<Dayjs['locale'], string>

type LocaleValue = ToValue<ReturnTypeLocale>

type Props = DateConfigType & FunctionComponentProps<LocaleValue>

/**
 * @link https://day.js.org/docs/en/durations/locale
 */
export function Locale({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.locale()}>{children}</Returns>
}
