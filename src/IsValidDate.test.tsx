import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IsValidDate } from './IsValidDate'

describe('IsValid', () => {
  it('render', () => {
    const utils = render(
      <IsValidDate date="2024-05-21">
        {({ value }) => <code>{JSON.stringify(value)}</code>}
      </IsValidDate>
    )

    expect(utils.container).toBeDefined()
    expect(utils.container).toHaveTextContent('true')
  })
})
