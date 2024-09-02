import { ConfigType, Dayjs } from 'dayjs'

export type DateConfigType = {
  date: ConfigType
}

export type Parameter<T extends Dayjs[keyof Dayjs]> = Parameters<T>[0]
