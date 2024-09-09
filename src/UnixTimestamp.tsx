import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type Unix = Dayjs['unix']

type UnixReturnType = ReturnType<Unix>

type UnixValue = ToValue<UnixReturnType>

type Props = DateConfigType & FunctionComponentProps<UnixValue>

/**
 * @link https://day.js.org/docs/en/display/unix-timestamp
 */
export function UnixTimestamp({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.unix()}>{children}</Returns>
}
