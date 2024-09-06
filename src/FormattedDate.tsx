import { Dayjs } from 'dayjs'
import {
  DateConfigType,
  FunctionComponentProps,
  Parameter,
  ToValue,
} from './types'
import { useDayjs } from './useDayjs'
import { Returns } from './Returns'

type Format = Dayjs['format']

type FormatValue = ToValue<ReturnType<Format>>

type FormatParams = {
  template: Parameter<Format>
}

type Props = DateConfigType & FormatParams & FunctionComponentProps<FormatValue>

/**
 * @link https://day.js.org/docs/en/display/format
 */
export function FormattedDate({ date, template, children }: Partial<Props>) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <Returns value={d.format(template)}>{children}</Returns>
}
