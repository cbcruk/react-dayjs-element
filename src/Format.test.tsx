import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Format } from './Format'

describe('Format', () => {
  it('render', () => {
    const date = new Date('2024-05-19')
    const utils = render(<Format date={date} template="YYYY/MM/DD" />)

    expect(utils.container).toBeDefined()
    expect(utils.container.textContent).toEqual('2024/05/19')
  })
})
