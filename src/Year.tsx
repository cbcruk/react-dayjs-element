import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type YearReturn = ReturnNumber<Dayjs['year']>

type YearValue = ToValue<YearReturn>

type Props = DefaultProps<Children<YearValue>>

/**
 * @link https://day.js.org/docs/en/get-set/year
 */
export function Year({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.year()}>{children}</Returns>}
    </UseDayjs>
  )
}
