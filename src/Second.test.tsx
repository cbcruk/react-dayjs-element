import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Second } from './Second'
import dayjs from 'dayjs'

describe('<Second />', () => {
  it('날짜가 제공되지 않은 경우 현재 초를 렌더링합니다.', () => {
    const utils = render(<Second />)
    const currentSecond = dayjs().second()

    expect(utils.getByText(currentSecond)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 초를 렌더링합니다.', () => {
    const utils = render(<Second date="2024-09-03T11:22:33" />)

    expect(utils.getByText('33')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Second date="2024-09-03T11:22:33">
        {({ value }) => <span data-testid="second-value">{value}</span>}
      </Second>,
    )
    const secondElement = utils.getByTestId('second-value')

    expect(secondElement).toHaveTextContent('33')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Second date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
