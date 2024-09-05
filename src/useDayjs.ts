import dayjs from 'dayjs'
import { useState } from 'react'
import { DateConfigType } from './types'
import { isValidDate } from './utils'

export function useDayjs({ date }: DateConfigType) {
  const [d] = useState(() => dayjs(date))

  return {
    d,
    isValidDate: isValidDate(d),
  }
}
