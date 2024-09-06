import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Getter } from './Getter'
import dayjs from 'dayjs'

describe('<Getter />', () => {
  it('날짜가 제공되지 않은 경우 현재 시각을 렌더링합니다.', () => {
    const utils = render(<Getter unit="year" />)
    const currentYear = dayjs().get('year')

    expect(utils.getByText(currentYear)).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 시각을 렌더링합니다.', () => {
    const utils = render(<Getter date="2024-09-03T11:22:33" unit="hour" />)

    expect(utils.getByText('11')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <Getter date="2024-09-03T11:22:33" unit="hour">
        {({ value }) => <span data-testid="hour-value">{value}</span>}
      </Getter>
    )
    const hourElement = utils.getByTestId('hour-value')

    expect(hourElement).toHaveTextContent('11')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<Getter date="invalid-date" unit="hour" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
