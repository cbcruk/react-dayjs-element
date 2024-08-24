import { Dayjs } from 'dayjs'

export type Parameter<T extends keyof Dayjs> = Parameters<Dayjs[T]>[0]

export type OptionalProps<T> = {
  [Key in keyof T]?: T[Key]
}
