import { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type ReturnTypeYear = ReturnNumber<Dayjs['year']>

type YearValue = ToValue<ReturnTypeYear>

type Props = DateConfigType & FunctionComponentProps<YearValue>

/**
 * @link https://day.js.org/docs/en/get-set/year
 */
export function Year({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.year()}>{children}</Returns>
}
