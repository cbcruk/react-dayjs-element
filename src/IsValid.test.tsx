import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IsValid } from './IsValid'

describe('IsValid', () => {
  it('render', () => {
    const utils = render(<IsValid date="2024-05-21" />)

    expect(utils.container).toBeDefined()
    expect(utils.container).toHaveTextContent('true')
  })
})
