import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Year } from './Year'
import dayjs from 'dayjs'

describe('<Year />', () => {
  it('날짜가 제공되지 않은 경우 현재 연도를 렌더링합니다.', () => {
    const utils = render(<Year />)
    const currentYear = dayjs().year()

    expect(utils.getByText(currentYear)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 연도를 렌더링합니다.', () => {
    const utils = render(<Year date="2024-09-03" />)

    expect(utils.getByText('2024')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Year date="2024-09-03">
        {({ value }) => <span data-testid="year-value">{value}</span>}
      </Year>,
    )
    const yearElement = utils.getByTestId('year-value')

    expect(yearElement).toHaveTextContent('2024')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Year date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
