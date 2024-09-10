import { Dayjs } from 'dayjs'
import { Children, DefaultProps, ToValue } from './types'
import { Returns } from './Returns'
import { UseDayjs } from './UseDayjs'

type Get = Dayjs['get']

type GetReturn = ReturnType<Get>

type GetValue = ToValue<GetReturn>

type GetParams = Required<Parameters<Get>> extends [infer U]
  ? { unit: U }
  : never

type Props = DefaultProps<GetParams & Children<GetValue>>

/**
 * @link https://day.js.org/docs/en/get-set/get
 */
export function Getter({ children, unit, ...props }: Props) {
  return (
    <UseDayjs {...props}>
      {({ d }) => <Returns value={d.get(unit)}>{children}</Returns>}
    </UseDayjs>
  )
}
