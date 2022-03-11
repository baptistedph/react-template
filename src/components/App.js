import Counter from './Counter'

const App = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
      <img
        src="/logo.svg"
        alt="react logo"
        className="h-20 duration-1000 [animation-duration:3s]"
      />
      <h3 className="mt-6 text-center text-2xl text-slate-700">
        Template by{' '}
        <a
          href="https://bdph.me/github"
          className="text-blue-500 hover:underline"
        >
          @baptistedph
        </a>
      </h3>
      <Counter />
      <p className="mt-12 text-lg text-slate-700">
        To get started, edit your{' '}
        <code className="mx-1 rounded bg-slate-100 p-2">src/App.js</code> and
        save to reload.
      </p>
      <div className="mt-6 flex items-center gap-2">
        <a
          href="https://reactjs.org/"
          className="text-center text-lg text-blue-500 hover:underline"
        >
          Docs
        </a>
        -
        <a
          href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
          className="text-center text-lg text-blue-500 hover:underline"
        >
          The Net Ninja
        </a>
      </div>
    </div>
  )
}

export default App
