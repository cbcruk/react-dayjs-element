import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Millisecond } from './Millisecond'

describe('<Millisecond />', () => {
  it('날짜가 제공되지 않은 경우 현재 밀리초를 렌더링합니다.', () => {
    const utils = render(<Millisecond />)

    for (let i = 0; i < 100; i++) {
      utils.rerender(<Millisecond />)
      const millisecondText = utils.getByText(/\d+/).textContent
      const millisecondValue = parseInt(millisecondText || '0', 10)
      expect(millisecondValue).toBeGreaterThanOrEqual(0)
      expect(millisecondValue).toBeLessThan(1000)
    }
  })

  it('주어진 날짜에 대해 올바른 밀리초를 렌더링합니다.', () => {
    const utils = render(<Millisecond date="2024-09-03T11:22:33:444" />)

    expect(utils.getByText('444')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Millisecond date="2024-09-03T11:22:33:444">
        {({ value }) => <span data-testid="millisecond-value">{value}</span>}
      </Millisecond>,
    )
    const millisecondElement = utils.getByTestId('millisecond-value')

    expect(millisecondElement).toHaveTextContent('444')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Millisecond date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
