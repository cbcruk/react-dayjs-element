import { Cheatsheet } from './components/cheatsheet'
import { Playground } from './components/playground'

export function App(): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <header className="text-center py-12 border-b border-border mb-12">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-br from-accent to-purple-500 bg-clip-text text-transparent">
          react-dayjs-element
        </h1>
        <p className="text-text-muted text-lg mb-6">
          Declarative date components for React, powered by Day.js
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/ieunsu/react-dayjs-element"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-border rounded-lg transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/react-dayjs-element"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-border rounded-lg transition-colors hover:border-accent hover:text-accent"
          >
            npm
          </a>
        </div>
      </header>

      <main className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Playground</h2>
          <p className="text-text-muted mb-6">
            Try different components and see the results in real-time
          </p>
          <Playground />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cheatsheet</h2>
          <p className="text-text-muted mb-6">
            Quick reference for all available components
          </p>
          <div className="bg-bg-card border border-border rounded-lg p-6">
            <Cheatsheet />
          </div>
        </section>
      </main>

    </div>
  )
}
