import { DateConfigType, FunctionComponentProps } from './types'
import dayjs from 'dayjs'
import { useState } from 'react'
import { isValidDate } from './utils'
import { useDateContext } from './useDateContext'

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
  const context = useDateContext()
  const { d, isValidDate: isValid } = useDayjsHook({ date })
  const shouldUseContext = date === undefined && context !== null

  if (shouldUseContext && context) {
    if (!context.isValidDate) {
      return null
    }

    return (
      <>
        {children({
          d: context.d,
          isValidDate: context.isValidDate,
        })}
      </>
    )
  }

  if (!isValid) {
    return null
  }

  return (
    <>
      {children({
        d,
        isValidDate: isValid,
      })}
    </>
  )
}
