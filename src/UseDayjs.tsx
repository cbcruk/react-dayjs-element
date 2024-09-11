import { DateConfigType, FunctionComponentProps } from './types'
import dayjs from 'dayjs'
import { useState } from 'react'
import { isValidDate } from './utils'

type Props = Partial<DateConfigType> &
  FunctionComponentProps<ReturnType<typeof useDayjsHook>>

function useDayjsHook({ date }: DateConfigType) {
  const [d] = useState(() => dayjs(date))

  return {
    d,
    isValidDate: isValidDate(d),
  }
}

export function UseDayjs({ date, children }: Props) {
  const { d, isValidDate } = useDayjsHook({ date })

  if (!isValidDate) {
    return null
  }

  return <>{children({ d, isValidDate })}</>
}
