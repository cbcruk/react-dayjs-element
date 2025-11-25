import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DateProvider } from './DateContext'
import { DateOfMonth } from './DateOfMonth'
import { Month } from './Month'
import { Year } from './Year'
import dayjs from 'dayjs'

describe('<DateProvider />', () => {
  it('Provider 없이 사용하면 현재 날짜를 렌더링합니다.', () => {
    const utils = render(<DateOfMonth />)
    const currentDate = dayjs().date()

    expect(utils.getByText(currentDate)).toBeInTheDocument()
  })

  it('Provider 내부에서는 Provider의 날짜를 사용합니다.', () => {
    const utils = render(
      <DateProvider date="2024-09-03">
        <DateOfMonth />
      </DateProvider>,
    )

    expect(utils.getByText('3')).toBeInTheDocument()
  })

  it('Provider 내부에서 여러 컴포넌트가 같은 날짜를 공유합니다.', () => {
    const utils = render(
      <DateProvider date="2024-09-03">
        <Year />-<Month />-<DateOfMonth />
      </DateProvider>,
    )

    // month()는 0-indexed이므로 9월은 8
    expect(utils.container).toHaveTextContent('2024-8-3')
  })

  it('Provider 내부에서도 props로 date를 명시하면 props가 우선입니다.', () => {
    const utils = render(
      <DateProvider date="2024-09-03">
        <DateOfMonth date="2024-12-25" />
      </DateProvider>,
    )

    expect(utils.getByText('25')).toBeInTheDocument()
  })

  it('중첩된 Provider는 내부 Provider가 우선입니다.', () => {
    const utils = render(
      <DateProvider date="2024-09-03">
        <div data-testid="outer">
          <DateOfMonth />
        </div>
        <DateProvider date="2024-12-25">
          <div data-testid="inner">
            <DateOfMonth />
          </div>
        </DateProvider>
      </DateProvider>,
    )

    expect(utils.getByTestId('outer')).toHaveTextContent('3')
    expect(utils.getByTestId('inner')).toHaveTextContent('25')
  })

  it('유효하지 않은 날짜일 경우 렌더링하지 않습니다.', () => {
    const utils = render(
      <DateProvider date="invalid-date">
        <DateOfMonth />
      </DateProvider>,
    )

    expect(utils.container).toBeEmptyDOMElement()
  })

  it('Provider로 여러 값을 한 번에 포맷팅할 수 있습니다.', () => {
    const utils = render(
      <DateProvider date="2024-01-15">
        <div data-testid="formatted">
          <Year />년 <Month />월 <DateOfMonth />일
        </div>
      </DateProvider>,
    )

    const formatted = utils.getByTestId('formatted')
    // month()는 0-indexed이므로 1월은 0
    expect(formatted).toHaveTextContent('2024년 0월 15일')
  })
})
