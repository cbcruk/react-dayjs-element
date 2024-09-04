import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import { DateOfTheMonth } from './DateOfTheMonth'

describe('<DateOfTheMonth />', () => {
  it('날짜가 제공되지 않은 경우 현재 일을 렌더링합니다.', () => {
    const utils = render(<DateOfTheMonth />)
    const currentDate = dayjs().date()

    expect(utils.getByText(currentDate)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 연도를 렌더링합니다.', () => {
    const utils = render(<DateOfTheMonth date="2024-09-03" />)

    expect(utils.getByText('3')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <DateOfTheMonth date="2024-09-03">
        {({ value }) => <span data-testid="date-value">{value}</span>}
      </DateOfTheMonth>,
    )
    const dateElement = utils.getByTestId('date-value')

    expect(dateElement).toHaveTextContent('3')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<DateOfTheMonth date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
