# 📅 react-dayjs-element

`react-dayjs-element`는 [Day.js](https://day.js.org/en/)를 기반으로 한 React 컴포넌트 모음입니다. 날짜와 시간 데이터를 유연하게 렌더링할 수 있도록 설계되었습니다.

## 특징

- **Day.js 기반**: 가볍고 강력한 날짜 라이브러리인 Day.js를 활용합니다.
- **타입스크립트 지원**: TypeScript로 작성되어 안정적인 개발이 가능합니다.
- **유연한 사용성**: JSX 내부에서 쉽게 사용할 수 있도록 설계되었습니다.

## 설치

```sh
pnpm add @cbcruk/react-dayjs-element
```

## 사용법

```tsx
import { DateOfMonth, TimeFromNow } from '@cbcruk/react-dayjs-element'

function Example() {
  return (
    <div>
      <p>
        오늘 날짜: <DateOfMonth />
      </p>
      <p>
        특정 날짜로부터 경과한 시간: <TimeFromNow date="2024-01-01" />
      </p>
    </div>
  )
}
```

## 제공하는 컴포넌트

다음과 같은 컴포넌트를 제공합니다:

- `<DateOfMonth />` – 해당 날짜의 일을 렌더링합니다.
- `<DayOfWeek />` – 해당 날짜의 요일을 렌더링합니다.
- `<DaysInMonth />` – 해당 월의 총 일 수를 렌더링합니다.
- `<Difference />` – 두 날짜 간 차이를 계산하여 렌더링합니다.
- `<FormattedDate />` – 특정 형식(format)으로 날짜를 렌더링합니다.
- `<Hour />` – 특정 날짜의 시(hour)를 렌더링합니다.
- `<Minute />` – 특정 날짜의 분(minute)을 렌더링합니다.
- `<Second />` – 특정 날짜의 초(second)를 렌더링합니다.
- `<UnixTimestamp />` – Unix 타임스탬프를 렌더링합니다.
- `<TimeFromNow />` – 현재 시점으로부터의 상대 시간을 표시합니다.
- `<ToISOString />`, `<ToJSON />`, `<ToString />` – 날짜 데이터를 문자열로 변환하여 렌더링합니다.

## Props

모든 컴포넌트는 기본적으로 다음과 같은 props를 지원합니다:

- `date?: string | number | Date` – 렌더링할 날짜 (기본값: 현재 날짜)
- `children?: (props: { value: any }) => ReactNode` – 렌더링을 제어하는 함수형 자식 컴포넌트

## 예제

```tsx
<DateOfMonth date="2024-09-03" />

<DateOfMonth>
  {({ value }) => <span>{value}일</span>}
</DateOfMonth>
```
