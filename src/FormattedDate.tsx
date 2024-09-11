import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type Format = Dayjs['format']

type FormatReturn = ReturnType<Format>

type FormatValue = ToValue<FormatReturn>

type FormatParams =
  Required<Parameters<Format>> extends [infer T] ? { template: T } : never

type Props = DefaultProps<FormatParams & Children<FormatValue>>

/**
 * @link https://day.js.org/docs/en/display/format
 */
export function FormattedDate({ children, template, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.format(template)}>{children}</Returns>}
    </UseDayjs>
  )
}
