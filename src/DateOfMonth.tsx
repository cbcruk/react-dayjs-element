import dayjs, { Dayjs } from 'dayjs'
import {
  FunctionComponentProps,
  DateConfigType,
  ToValue,
  ReturnNumber,
} from './types'
import { useState } from 'react'
import { isFunctionComponent } from './utils'

type ReturnTypeDate = ReturnNumber<Dayjs['date']>

type DateValue = ToValue<ReturnTypeDate>

type Props = DateConfigType & FunctionComponentProps<DateValue>

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
export function DateOfMonth({ date, children }: Partial<Props>) {
  const [d] = useState(() => dayjs(date))

  if (!d.isValid()) {
    return null
  }

  const value = d.date()

  if (isFunctionComponent(children)) {
    return <>{children({ value })}</>
  }

  return <>{value}</>
}
