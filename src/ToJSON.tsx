import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type ToJson = Dayjs['toJSON']

type ToJsonReturnType = ReturnType<ToJson>

type ToJsonValue = ToValue<ToJsonReturnType>

type Props = DateConfigType & FunctionComponentProps<ToJsonValue>

/**
 * @link https://day.js.org/docs/en/display/as-json
 */
export function ToJSON({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.toJSON()}>{children}</Returns>
}
