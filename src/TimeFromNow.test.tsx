import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TimeFromNow } from './TimeFromNow'

describe('<TimeFromNow />', () => {
  it('render', () => {
    const utils = render(<TimeFromNow date="2024-05-21" />)

    expect(utils.container).toBeDefined()
    expect(utils.container).toHaveTextContent('ago')

    utils.rerender(<TimeFromNow date="2024-05-21" withoutSuffix />)

    expect(utils.container).not.toHaveTextContent('ago')

    utils.rerender(
      <TimeFromNow date="2024-05-21" withoutSuffix>
        {({ value }) => `${value}`}
      </TimeFromNow>,
    )

    expect(utils.container).not.toHaveTextContent('ago')
  })
})
