import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DayOfWeek } from './DayOfWeek'
import dayjs from 'dayjs'

describe('<DayOfWeek />', () => {
  it('날짜가 제공되지 않은 경우 현재 요일을 렌더링합니다.', () => {
    const utils = render(<DayOfWeek />)
    const currentDay = dayjs().day()

    expect(utils.getByText(currentDay)).toBeInTheDocument()
  })

  it.each([
    ['2024-09-01', 0],
    ['2024-09-02', 1],
    ['2024-09-03', 2],
    ['2024-09-04', 3],
    ['2024-09-05', 4],
    ['2024-09-06', 5],
    ['2024-09-07', 6],
  ])(
    '주어진 날짜(%s)에 대해 올바른 요일(%i)을 렌더링합니다.',
    (date, expected) => {
      const utils = render(<DayOfWeek date={date} />)
      expect(utils.getByText(expected)).toBeInTheDocument()
    },
  )

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <DayOfWeek date="2024-09-03T11:22:33">
        {({ value }) => <span data-testid="day-value">{value}</span>}
      </DayOfWeek>,
    )
    const dayElement = utils.getByTestId('day-value')

    expect(dayElement).toHaveTextContent('2')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<DayOfWeek date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
