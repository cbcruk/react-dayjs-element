import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DaysInMonth } from './DaysInMonth'

describe('<DaysInMonth />', () => {
  it('날짜가 제공되지 않은 경우 현재 달의 일수를 렌더링합니다.', () => {
    const utils = render(<DaysInMonth />)

    expect(utils.container).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 달의 일수를 렌더링합니다.', () => {
    const utils = render(<DaysInMonth date="2024-09-03" />)

    expect(utils.getByText('30')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <DaysInMonth date="2024-09-03">
        {({ value }) => <span data-testid="days-in-month-value">{value}</span>}
      </DaysInMonth>,
    )
    const daysInMonthElement = utils.getByTestId('days-in-month-value')

    expect(daysInMonthElement).toHaveTextContent('30')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<DaysInMonth date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
