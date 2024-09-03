import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Minute } from './Minute'
import dayjs from 'dayjs'

describe('<Minute />', () => {
  it('날짜가 제공되지 않은 경우 현재 분을 렌더링합니다.', () => {
    const utils = render(<Minute />)
    const currentMinute = dayjs().minute()

    expect(utils.getByText(currentMinute)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 분을 렌더링합니다.', () => {
    const utils = render(<Minute date="2024-09-03T11:22:33" />)

    expect(utils.getByText('22')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Minute date="2024-09-03T11:22:33">
        {({ value }) => <span data-testid="minute-value">{value}</span>}
      </Minute>,
    )
    const minuteElement = utils.getByTestId('minute-value')

    expect(minuteElement).toHaveTextContent('22')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Minute date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
