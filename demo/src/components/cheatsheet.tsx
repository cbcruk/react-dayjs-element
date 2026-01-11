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

const SAMPLE_DATE = '2024-09-15T14:30:00'
const SAMPLE_DATE_2 = '2024-10-01T09:00:00'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

interface CheatsheetRow {
  component: string
  code: string
  output: React.ReactNode
  description: string
}

export function Cheatsheet(): React.ReactElement {
  const rows: CheatsheetRow[] = [
    {
      component: 'TimeFromNow',
      code: '<TimeFromNow date="..." />',
      output: <TimeFromNow date={SAMPLE_DATE} />,
      description: 'Relative time from now',
    },
    {
      component: 'TimeFromNow',
      code: '<TimeFromNow date="..." withoutSuffix />',
      output: <TimeFromNow date={SAMPLE_DATE} withoutSuffix />,
      description: 'Without "ago" suffix',
    },
    {
      component: 'FormattedDate',
      code: '<FormattedDate template="YYYY-MM-DD" />',
      output: <FormattedDate date={SAMPLE_DATE} template="YYYY-MM-DD" />,
      description: 'ISO date format',
    },
    {
      component: 'FormattedDate',
      code: '<FormattedDate template="MMMM D, YYYY" />',
      output: <FormattedDate date={SAMPLE_DATE} template="MMMM D, YYYY" />,
      description: 'Long date format',
    },
    {
      component: 'FormattedDate',
      code: '<FormattedDate template="dddd" />',
      output: <FormattedDate date={SAMPLE_DATE} template="dddd" />,
      description: 'Day name',
    },
    {
      component: 'FormattedDate',
      code: '<FormattedDate template="HH:mm:ss" />',
      output: <FormattedDate date={SAMPLE_DATE} template="HH:mm:ss" />,
      description: 'Time format',
    },
    {
      component: 'Year',
      code: '<Year date="..." />',
      output: <Year date={SAMPLE_DATE} />,
      description: 'Extract year',
    },
    {
      component: 'Month',
      code: '<Month>{({ value }) => value + 1}</Month>',
      output: <Month date={SAMPLE_DATE}>{({ value }) => value + 1}</Month>,
      description: 'Extract month (0-indexed)',
    },
    {
      component: 'DateOfMonth',
      code: '<DateOfMonth date="..." />',
      output: <DateOfMonth date={SAMPLE_DATE} />,
      description: 'Extract day of month',
    },
    {
      component: 'DayOfWeek',
      code: '<DayOfWeek>{({ value }) => DAYS[value]}</DayOfWeek>',
      output: (
        <DayOfWeek date={SAMPLE_DATE}>
          {({ value }) => DAYS[value]}
        </DayOfWeek>
      ),
      description: 'Day of week (0=Sun)',
    },
    {
      component: 'Hour',
      code: '<Hour date="..." />',
      output: <Hour date={SAMPLE_DATE} />,
      description: 'Extract hour (0-23)',
    },
    {
      component: 'Minute',
      code: '<Minute date="..." />',
      output: <Minute date={SAMPLE_DATE} />,
      description: 'Extract minute',
    },
    {
      component: 'Second',
      code: '<Second date="..." />',
      output: <Second date={SAMPLE_DATE} />,
      description: 'Extract second',
    },
    {
      component: 'DaysInMonth',
      code: '<DaysInMonth date="..." />',
      output: <DaysInMonth date={SAMPLE_DATE} />,
      description: 'Days in the month',
    },
    {
      component: 'Difference',
      code: '<Difference date="..." date2="..." unit="day" />',
      output: (
        <Difference date={SAMPLE_DATE} date2={SAMPLE_DATE_2} unit="day" />
      ),
      description: 'Difference in days',
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-text-muted">
            <th className="py-3 px-4 font-medium">Component</th>
            <th className="py-3 px-4 font-medium">Code</th>
            <th className="py-3 px-4 font-medium">Output</th>
            <th className="py-3 px-4 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-border hover:bg-bg-elevated/50 transition-colors"
            >
              <td className="py-3 px-4">
                <code className="text-accent text-xs">{row.component}</code>
              </td>
              <td className="py-3 px-4">
                <code className="text-fuchsia-400 text-xs whitespace-nowrap">
                  {row.code}
                </code>
              </td>
              <td className="py-3 px-4 font-mono">{row.output}</td>
              <td className="py-3 px-4 text-text-muted">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 p-6 bg-bg-elevated rounded-lg">
        <h4 className="text-sm font-semibold mb-4">DateProvider Example</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-text-muted mb-2">Code</p>
            <pre className="text-xs text-fuchsia-400 bg-bg p-4 rounded-lg overflow-x-auto">
{`<DateProvider date="${SAMPLE_DATE}">
  <Year />년 <Month>{({ value }) => value + 1}</Month>월 <DateOfMonth />일
  <Hour />:<Minute />:<Second />
</DateProvider>`}
            </pre>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-2">Output</p>
            <div className="bg-bg p-4 rounded-lg font-mono">
              <DateProvider date={SAMPLE_DATE}>
                <Year />년 <Month>{({ value }) => value + 1}</Month>월{' '}
                <DateOfMonth />일 <Hour />:
                <Minute>{({ value }) => String(value).padStart(2, '0')}</Minute>
                :<Second>{({ value }) => String(value).padStart(2, '0')}</Second>
              </DateProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
