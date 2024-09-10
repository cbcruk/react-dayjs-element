import { ConfigType, Dayjs } from 'dayjs'
import { FC } from 'react'

export type DateConfigType = {
  /** 날짜 값 (문자열, Date 객체, Dayjs 객체 중 하나) */
  date: ConfigType
}

export type Parameter<T extends Dayjs[keyof Dayjs]> = Parameters<T>[0]

export type FunctionComponentProps<T> = {
  /** 렌더링할 함수 컴포넌트 */
  children: FC<T>
}

export type ToValue<T> = {
  value: T
}

export type ReturnTo<T, R> = T extends () => R ? R : never

export type ReturnNumber<T> = ReturnTo<T, number>

export type DefaultProps<T> = Partial<DateConfigType> & T

export type Children<T> = Partial<FunctionComponentProps<T>>
