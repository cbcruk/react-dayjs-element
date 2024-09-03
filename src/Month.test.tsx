import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Month } from './Month'
import dayjs from 'dayjs'

describe('<Month />', () => {
  it('날짜가 제공되지 않은 경우 현재 월을 렌더링합니다.', () => {
    const utils = render(<Month />)
    const currentMonth = dayjs().month()

    expect(utils.getByText(currentMonth)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 월을 렌더링합니다.', () => {
    const utils = render(<Month date="2024-09-03" />)

    expect(utils.getByText('8')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Month date="2024-09-03">
        {({ value }) => <span data-testid="month-value">{value}</span>}
      </Month>,
    )
    const monthElement = utils.getByTestId('month-value')

    expect(monthElement).toHaveTextContent('8')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Month date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
