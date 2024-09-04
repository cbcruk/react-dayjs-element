import { ConfigType, Dayjs } from 'dayjs'
import { FC } from 'react'

export type DateConfigType = {
  date: ConfigType
}

export type Parameter<T extends Dayjs[keyof Dayjs]> = Parameters<T>[0]

export type FunctionComponentProps<T> = {
  children: FC<T>
}

export type ToValue<T> = {
  value: T
}
