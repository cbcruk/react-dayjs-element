# 📅 react-dayjs-element

> React에서 날짜를 선언적으로 표시하는 컴포넌트 라이브러리

`react-dayjs-element`는 [Day.js](https://day.js.org/en/)를 기반으로 한 React 컴포넌트 모음입니다. GitHub의 [`<relative-time>`](https://github.com/github/relative-time-element)에서 영감을 받아 만들었습니다.

## 특징

- **Day.js 기반**: 가볍고 강력한 날짜 라이브러리
- **TypeScript 지원**: 완벽한 타입 안정성
- **선언적 API**: JSX에서 자연스러운 사용성
- **Context 지원**: 여러 컴포넌트 간 날짜 인스턴스 공유

## 설치

```sh
pnpm add @cbcruk/react-dayjs-element
```

## 사용법

### 기본 사용법

```tsx
import { DateOfMonth, TimeFromNow } from '@cbcruk/react-dayjs-element'

function Example() {
  return (
    <p>
      오늘 날짜: <DateOfMonth />
      <br />
      특정 날짜로부터 경과한 시간: <TimeFromNow date="2024-01-01" />
    </p>
  )
}
```

### DateProvider로 날짜 공유하기

`DateProvider`를 사용하면 여러 컴포넌트가 같은 날짜 인스턴스를 공유할 수 있어 성능이 향상됩니다:

```tsx
import {
  DateProvider,
  Year,
  Month,
  DateOfMonth,
} from '@cbcruk/react-dayjs-element'

function Example() {
  return (
    <DateProvider date="2024-09-03">
      <Year />년 <Month />월 <DateOfMonth />일
    </DateProvider>
  )
}
```

**장점:**

- 같은 날짜로 여러 컴포넌트를 사용할 때 dayjs 인스턴스를 재사용
- Provider 내부에서도 개별 컴포넌트에 `date` prop을 전달하면 해당 값이 우선 적용됨
- Provider는 중첩 가능

## 제공하는 컴포넌트

### 핵심 컴포넌트

- **`<TimeFromNow />`** – 상대 시간 표시 (예: "3일 전")
- **`<FormattedDate />`** – 포맷팅된 날짜 표시
- **`<DateProvider />`** – Context로 날짜 공유

### 선언적 조합용 컴포넌트

- `<Year />` – 연도
- `<Month />` – 월 (0-indexed: 0=1월, 11=12월)
- `<DateOfMonth />` – 일
- `<Hour />` – 시
- `<Minute />` – 분
- `<Second />` – 초

### 추가 유틸리티

- `<DayOfWeek />` – 요일 (0=일요일, 6=토요일)
- `<DaysInMonth />` – 해당 월의 총 일 수
- `<Difference />` – 두 날짜 간 차이

## Props

모든 컴포넌트는 기본적으로 다음과 같은 props를 지원합니다:

- `date?: string | number | Date` – 렌더링할 날짜 (기본값: 현재 날짜)
- `children?: (props: { value: any }) => ReactNode` – 렌더링을 제어하는 함수형 자식 컴포넌트

## 예제

### 기본 예제

```tsx
<DateOfMonth date="2024-09-03" />

<DateOfMonth>
  {({ value }) => <span>{value}일</span>}
</DateOfMonth>
```

### DateProvider 활용 예제

```tsx
import {
  DateProvider,
  Year,
  Month,
  DateOfMonth,
  Hour,
  Minute,
} from '@cbcruk/react-dayjs-element'

function BlogPost({ publishedAt }) {
  return (
    <DateProvider date={publishedAt}>
      <article>
        <time>
          <Year />년 <Month />월 <DateOfMonth />일 <Hour />:<Minute />
        </time>
        <h1>블로그 제목</h1>
        {/* ... */}
      </article>
    </DateProvider>
  )
}

function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <DateProvider key={event.id} date={event.startDate}>
          <li>
            {event.name} - <Month />월 <DateOfMonth />일
          </li>
        </DateProvider>
      ))}
    </ul>
  )
}
```
