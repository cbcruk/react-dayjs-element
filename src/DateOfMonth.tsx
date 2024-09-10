import { Dayjs } from 'dayjs'
import { ToValue, ReturnNumber, Children, DefaultProps } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type DateReturn = ReturnNumber<Dayjs['date']>

type DateValue = ToValue<DateReturn>

type Props = DefaultProps<Children<DateValue>>

/**
 * `DateOfMonth` 컴포넌트는 주어진 날짜의 일(day of the month)을 렌더링합니다.
 *
 * @example
 * ```tsx
 * <DateOfMonth />
 *
 * <DateOfMonth date="2024-09-03" />
 *
 * <DateOfMonth date="2024-09-03">
 *   {({ value }) => <>{value}</>}
 * </DateOfMonth>
 * ```
 *
 * @link https://day.js.org/docs/en/get-set/date
 */
export function DateOfMonth({ children, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.date()}>{children}</Returns>}
    </UseDayjs>
  )
}
