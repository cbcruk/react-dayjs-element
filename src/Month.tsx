import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeMonth = ReturnNumber<Dayjs['month']>

type MonthValue = ToValue<ReturnTypeMonth>

type Props = DateConfigType & FunctionComponentProps<MonthValue>

/**
 * @link https://day.js.org/docs/en/get-set/month
 */
export function Month({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.month()}>{children}</Returns>
}
