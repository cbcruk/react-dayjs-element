import dayjs, { ConfigType, Dayjs } from 'dayjs'

type Props = {
  date?: ConfigType
  template?: Parameters<Dayjs['format']>[0]
}

export function Format({ date, template }: Props) {
  return <>{dayjs(date).format(template)}</>
}
