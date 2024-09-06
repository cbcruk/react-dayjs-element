import { Dayjs } from 'dayjs'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type Get = Dayjs['get']

type GetValue = ToValue<ReturnType<Get>>

type GetParams = {
  unit: Parameter<Get>
}

type Props = DateConfigType & FunctionComponentProps<GetValue>

/**
 * @link https://day.js.org/docs/en/get-set/get
 */
export function Getter({ date, unit, children }: Partial<Props> & GetParams) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.get(unit)}>{children}</Returns>
}
