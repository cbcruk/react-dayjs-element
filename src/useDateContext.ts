import { useContext } from 'react'
import { DateContext, DateContextValue } from './DateContext'

/**
 * DateContext를 사용하는 hook입니다.
 * DateProvider 내부에서만 사용할 수 있습니다.
 *
 * @example
 * ```tsx
 * function CustomComponent() {
 *   const { d, isValidDate } = useDateContext()
 *   if (!isValidDate) return null
 *   return <div>{d.format('YYYY-MM-DD')}</div>
 * }
 * ```
 */
export function useDateContext(): DateContextValue | null {
  return useContext(DateContext)
}
