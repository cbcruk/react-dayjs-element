import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UnixTimestamp } from './UnixTimestamp'

describe('<UnixTimestamp />', () => {
  it('날짜가 제공되지 않은 경우.', () => {
    const utils = render(<UnixTimestamp />)

    expect(utils.container).toBeInTheDocument()
  })

  it('주어진 날짜에 대해 올바른 반횐값을 렌더링합니다.', () => {
    const utils = render(<UnixTimestamp date="2024-09-03" />)

    expect(utils.getByText('1725289200')).toBeInTheDocument()
  })

  it('올바른 값으로 자식 함수를 렌더링합니다.', () => {
    const utils = render(
      <UnixTimestamp date="2024-09-03">
        {({ value }) => <span data-testid="unix-timestamp-value">{value}</span>}
      </UnixTimestamp>,
    )
    const unixTimestampElement = utils.getByTestId('unix-timestamp-value')

    expect(unixTimestampElement).toHaveTextContent('1725289200')
  })

  it('유효하지 않은 날짜일 경우 렌더링 하지 않습니다.', () => {
    const utils = render(<UnixTimestamp date="invalid-date" />)

    expect(utils.container).toBeEmptyDOMElement()
  })
})
