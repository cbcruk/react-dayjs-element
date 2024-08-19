import { Dayjs } from 'dayjs'

export type Parameter<T extends keyof Dayjs> = Parameters<Dayjs[T]>[0]
