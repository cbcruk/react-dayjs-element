import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FromNow } from './FromNow'

describe('FromNow', () => {
  it('render', () => {
    const utils = render(<FromNow date="2024-05-21" />)

    expect(utils.container).toBeDefined()
    expect(utils.container).toHaveTextContent('ago')

    utils.rerender(<FromNow date="2024-05-21" withoutSuffix />)

    expect(utils.container).not.toHaveTextContent('ago')
  })
})
