import { useDayjs } from './useDayjs'
import { DateConfigType, FunctionComponentProps } from './types'

type Props = Partial<DateConfigType> &
  FunctionComponentProps<ReturnType<typeof useDayjs>>

export function UseDayjs({ date, children }: Props) {
  const { d, isValidDate } = useDayjs({ date })

  if (!isValidDate) {
    return null
  }

  return <>{children({ d, isValidDate })}</>
}
