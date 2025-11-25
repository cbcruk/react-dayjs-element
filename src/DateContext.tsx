import { createContext, ReactNode, useMemo } from 'react'
import dayjs, { Dayjs, ConfigType } from 'dayjs'

export type DateContextValue = {
  /** dayjs 인스턴스 */
  d: Dayjs
  /** 날짜가 유효한지 여부 */
  isValidDate: boolean
}

export const DateContext = createContext<DateContextValue | null>(null)

export type DateProviderProps = {
  /** 날짜 값 */
  date?: ConfigType
  /** 자식 컴포넌트 */
  children: ReactNode
}

/**
 * `DateProvider`는 자식 컴포넌트들에게 날짜 컨텍스트를 제공합니다.
 *
 * @example
 * ```tsx
 * <DateProvider date="2024-01-01">
 *   <Year />년 <Month />월 <DateOfMonth />일
 * </DateProvider>
 * ```
 *
 * Provider 내부의 모든 컴포넌트는 같은 dayjs 인스턴스를 공유하므로
 * 성능상 이점이 있습니다.
 */
export function DateProvider({ date, children }: DateProviderProps) {
  const contextValue = useMemo(() => {
    const d = dayjs(date)
    return {
      d,
      isValidDate: d.isValid(),
    }
  }, [date])

  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  )
}
