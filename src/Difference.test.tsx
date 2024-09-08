import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Difference } from './Difference'

describe('<Difference />', () => {
  it('올바른 날짜와 단위를 전달하면 차이 값을 렌더링합니다.', () => {
    const utils = render(
      <Difference date="2024-09-08" date2="2024-09-07" unit="d" />,
    )

    expect(utils.getByText('1')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Difference date="2024-09-08" date2="2024-09-07" unit="d">
        {({ value }) => <span data-testid="date-value">{value}</span>}
      </Difference>,
    )
    const dateElement = utils.getByTestId('date-value')

    expect(dateElement).toHaveTextContent('1')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Difference date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
