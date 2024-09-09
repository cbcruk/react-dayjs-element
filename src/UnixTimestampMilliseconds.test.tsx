import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UnixTimestampMilliseconds } from './UnixTimestampMilliseconds'

describe('<UnixTimestampMilliseconds />', () => {
  it('날짜가 제공되지 않은 경우.', () => {
    const utils = render(<UnixTimestampMilliseconds />)

    expect(utils.container).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 반횐값을 렌더링합니다.', () => {
    const utils = render(<UnixTimestampMilliseconds date="2024-09-03" />)

    expect(utils.getByText('1725289200000')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <UnixTimestampMilliseconds date="2024-09-03">
        {({ value }) => (
          <span data-testid="unix-timestamp-milliseconds-value">{value}</span>
        )}
      </UnixTimestampMilliseconds>,
    )
    const unixTimestampMillisecondsElement = utils.getByTestId(
      'unix-timestamp-milliseconds-value',
    )

    expect(unixTimestampMillisecondsElement).toHaveTextContent('1725289200000')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<UnixTimestampMilliseconds date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
