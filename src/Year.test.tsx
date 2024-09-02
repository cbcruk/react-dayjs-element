import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Year } from './Year'

describe('Year', () => {
  it('render', () => {
    const utils = render(<Year date="2024-05-21" />)

    expect(utils.container).toBeDefined()
    expect(utils.container).toHaveTextContent('2024')
  })
})
