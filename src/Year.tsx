import dayjs from 'dayjs'
import { DateConfigType } from './types'

type Props = DateConfigType

export function Year({ date }: Partial<Props>) {
  return <>{dayjs(date).year()}</>
}
