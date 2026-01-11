import { useState } from 'react'
import {
  TimeFromNow,
  FormattedDate,
  DateProvider,
  Year,
  Month,
  DateOfMonth,
  Hour,
  Minute,
  Second,
  DayOfWeek,
  DaysInMonth,
  Difference,
} from 'react-dayjs-element'

type ComponentType =
  | 'TimeFromNow'
  | 'FormattedDate'
  | 'DateProvider'
  | 'Difference'
  | 'Individual'

interface ComponentOption {
  value: ComponentType
  label: string
  description: string
}

const componentOptions: ComponentOption[] = [
  {
    value: 'TimeFromNow',
    label: 'TimeFromNow',
    description: 'Display relative time (e.g., "3 days ago")',
  },
  {
    value: 'FormattedDate',
    label: 'FormattedDate',
    description: 'Format date using Day.js templates',
  },
  {
    value: 'DateProvider',
    label: 'DateProvider',
    description: 'Share date context with child components',
  },
  {
    value: 'Difference',
    label: 'Difference',
    description: 'Calculate difference between two dates',
  },
  {
    value: 'Individual',
    label: 'Individual Components',
    description: 'Year, Month, DateOfMonth, Hour, Minute, Second, etc.',
  },
]

const formatTemplates = [
  { value: 'YYYY-MM-DD', label: 'ISO Date (2024-01-15)' },
  { value: 'MMMM D, YYYY', label: 'Long Date (January 15, 2024)' },
  { value: 'MMM DD', label: 'Short Date (Jan 15)' },
  { value: 'dddd', label: 'Day Name (Monday)' },
  { value: 'HH:mm:ss', label: 'Time (14:30:00)' },
  { value: 'YYYY/MM/DD HH:mm', label: 'Full DateTime' },
]

const differenceUnits = [
  { value: 'day', label: 'Days' },
  { value: 'week', label: 'Weeks' },
  { value: 'month', label: 'Months' },
  { value: 'year', label: 'Years' },
  { value: 'hour', label: 'Hours' },
  { value: 'minute', label: 'Minutes' },
]

function getDefaultDate(): string {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 16)
}

function getDefaultDate2(): string {
  const now = new Date()
  now.setDate(now.getDate() + 7)
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 16)
}

export function Playground(): React.ReactElement {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>('TimeFromNow')
  const [dateInput, setDateInput] = useState(getDefaultDate())
  const [dateInput2, setDateInput2] = useState(getDefaultDate2())
  const [formatTemplate, setFormatTemplate] = useState('YYYY-MM-DD')
  const [withoutSuffix, setWithoutSuffix] = useState(false)
  const [diffUnit, setDiffUnit] = useState<'day' | 'week' | 'month' | 'year' | 'hour' | 'minute'>('day')

  const dateValue = new Date(dateInput).toISOString()
  const dateValue2 = new Date(dateInput2).toISOString()

  function renderResult(): React.ReactNode {
    switch (selectedComponent) {
      case 'TimeFromNow':
        return <TimeFromNow date={dateValue} withoutSuffix={withoutSuffix} />
      case 'FormattedDate':
        return <FormattedDate date={dateValue} template={formatTemplate} />
      case 'DateProvider':
        return (
          <DateProvider date={dateValue}>
            <Year />-
            <Month>{({ value }) => String(value + 1).padStart(2, '0')}</Month>-
            <DateOfMonth>
              {({ value }) => String(value).padStart(2, '0')}
            </DateOfMonth>{' '}
            <Hour>{({ value }) => String(value).padStart(2, '0')}</Hour>:
            <Minute>{({ value }) => String(value).padStart(2, '0')}</Minute>:
            <Second>{({ value }) => String(value).padStart(2, '0')}</Second>
          </DateProvider>
        )
      case 'Difference':
        return (
          <Difference date={dateValue} date2={dateValue2} unit={diffUnit} />
        )
      case 'Individual':
        return (
          <div className="flex flex-col gap-2 text-sm">
            <div>
              <code className="text-accent text-xs">&lt;Year /&gt;</code>:{' '}
              <Year date={dateValue} />
            </div>
            <div>
              <code className="text-accent text-xs">&lt;Month /&gt;</code>:{' '}
              <Month date={dateValue}>{({ value }) => value + 1}</Month>
            </div>
            <div>
              <code className="text-accent text-xs">&lt;DateOfMonth /&gt;</code>
              : <DateOfMonth date={dateValue} />
            </div>
            <div>
              <code className="text-accent text-xs">&lt;DayOfWeek /&gt;</code>:{' '}
              <DayOfWeek date={dateValue}>
                {({ value }) =>
                  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][value]
                }
              </DayOfWeek>
            </div>
            <div>
              <code className="text-accent text-xs">&lt;DaysInMonth /&gt;</code>
              : <DaysInMonth date={dateValue} />
            </div>
            <div>
              <code className="text-accent text-xs">&lt;Hour /&gt;</code>:{' '}
              <Hour date={dateValue} />
            </div>
            <div>
              <code className="text-accent text-xs">&lt;Minute /&gt;</code>:{' '}
              <Minute date={dateValue} />
            </div>
            <div>
              <code className="text-accent text-xs">&lt;Second /&gt;</code>:{' '}
              <Second date={dateValue} />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  function getCodeExample(): string {
    switch (selectedComponent) {
      case 'TimeFromNow':
        return `<TimeFromNow
  date="${dateValue}"${withoutSuffix ? '\n  withoutSuffix' : ''}
/>`
      case 'FormattedDate':
        return `<FormattedDate
  date="${dateValue}"
  template="${formatTemplate}"
/>`
      case 'DateProvider':
        return `<DateProvider date="${dateValue}">
  <Year />-
  <Month>{({ value }) => String(value + 1).padStart(2, '0')}</Month>-
  <DateOfMonth>{({ value }) => String(value).padStart(2, '0')}</DateOfMonth>
  {' '}
  <Hour>{({ value }) => String(value).padStart(2, '0')}</Hour>:
  <Minute>{({ value }) => String(value).padStart(2, '0')}</Minute>:
  <Second>{({ value }) => String(value).padStart(2, '0')}</Second>
</DateProvider>`
      case 'Difference':
        return `<Difference
  date="${dateValue}"
  date2="${dateValue2}"
  unit="${diffUnit}"
/>`
      case 'Individual':
        return `<Year date="${dateValue}" />
<Month date="${dateValue}">{({ value }) => value + 1}</Month>
<DateOfMonth date="${dateValue}" />
<DayOfWeek date="${dateValue}">{({ value }) => ['Sun', 'Mon', ...][value]}</DayOfWeek>
<DaysInMonth date="${dateValue}" />
<Hour date="${dateValue}" />
<Minute date="${dateValue}" />
<Second date="${dateValue}" />`
      default:
        return ''
    }
  }

  const inputClass =
    'px-3 py-2 border border-border rounded-lg bg-bg-elevated text-white text-sm focus:outline-none focus:border-accent'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-bg-card border border-border rounded-lg p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-muted">
            Component
          </label>
          <div className="flex flex-wrap gap-2">
            {componentOptions.map((option) => (
              <button
                key={option.value}
                className={`px-4 py-2 border rounded-lg text-sm transition-colors cursor-pointer ${
                  selectedComponent === option.value
                    ? 'bg-accent border-accent'
                    : 'border-border hover:border-accent'
                }`}
                onClick={() => setSelectedComponent(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            {
              componentOptions.find((o) => o.value === selectedComponent)
                ?.description
            }
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="date-input" className="text-sm font-semibold text-text-muted">
            Date
          </label>
          <input
            id="date-input"
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className={inputClass}
          />
        </div>

        {selectedComponent === 'Difference' && (
          <div className="flex flex-col gap-2">
            <label htmlFor="date-input-2" className="text-sm font-semibold text-text-muted">
              Compare To
            </label>
            <input
              id="date-input-2"
              type="datetime-local"
              value={dateInput2}
              onChange={(e) => setDateInput2(e.target.value)}
              className={inputClass}
            />
          </div>
        )}

        {selectedComponent === 'TimeFromNow' && (
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={withoutSuffix}
                onChange={(e) => setWithoutSuffix(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
              Without suffix (hide "ago" / "in")
            </label>
          </div>
        )}

        {selectedComponent === 'FormattedDate' && (
          <div className="flex flex-col gap-2">
            <label htmlFor="format-select" className="text-sm font-semibold text-text-muted">
              Format Template
            </label>
            <select
              id="format-select"
              value={formatTemplate}
              onChange={(e) => setFormatTemplate(e.target.value)}
              className={inputClass}
            >
              {formatTemplates.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={formatTemplate}
              onChange={(e) => setFormatTemplate(e.target.value)}
              placeholder="Custom template..."
              className={`${inputClass} mt-2`}
            />
          </div>
        )}

        {selectedComponent === 'Difference' && (
          <div className="flex flex-col gap-2">
            <label htmlFor="diff-unit" className="text-sm font-semibold text-text-muted">
              Unit
            </label>
            <select
              id="diff-unit"
              value={diffUnit}
              onChange={(e) => setDiffUnit(e.target.value as typeof diffUnit)}
              className={inputClass}
            >
              {differenceUnits.map((u) => (
                <option key={u.value} value={u.value}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-sm text-text-muted mb-3">Result</h4>
          <div className="p-6 bg-bg-elevated rounded-lg text-xl min-h-[80px] flex items-center">
            {renderResult()}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-text-muted mb-3">Code</h4>
          <pre className="p-4 bg-bg rounded-lg overflow-x-auto text-sm leading-relaxed">
            <code className="text-fuchsia-400">{getCodeExample()}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
