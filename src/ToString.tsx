import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ToString = Dayjs['toString']

type ToStringReturnType = ReturnType<ToString>

type ToStringValue = ToValue<ToStringReturnType>

type Props = DateConfigType & FunctionComponentProps<ToStringValue>

/**
 * @link https://day.js.org/docs/en/display/as-string
 */
export function ToString({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.toString()}>{children}</Returns>
}
