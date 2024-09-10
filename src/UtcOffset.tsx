import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type UtcOffset = Dayjs['utcOffset']

type UtcOffsetReturnType = ReturnType<UtcOffset>

type UtcOffsetValue = ToValue<UtcOffsetReturnType>

type Props = DateConfigType & FunctionComponentProps<UtcOffsetValue>

/**
 * @link https://day.js.org/docs/en/manipulate/utc-offset
 */
export function UtcOffset({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.utcOffset()}>{children}</Returns>
}
