import { Dayjs } from 'dayjs'
import { DateConfigType, FunctionComponentProps, ToValue } from './types'
import { Returns } from './Returns'
import { useDayjs } from './useDayjs'

type IsValid = Dayjs['isValid']
type IsValidValue = ToValue<ReturnType<IsValid>>

type Props = DateConfigType & FunctionComponentProps<IsValidValue>

export function IsValidDate({ date, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.isValid()}>{children}</Returns>
}
