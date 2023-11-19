import { FLIGHTS } from "./data"

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full lg:max-w-5xl px-24">
      <div className="pt-10 mb-32 flex flex-col text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      </div>

      <div className="mb-32 flex flex-col text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        {
          FLIGHTS.map(flight =>
            <>
              <a
                key={flight.id}
                href={`/flight/${flight.id}`}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className="mb-3 text-2xl font-semibold transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                  {flight.origin + ' '}
                  <span className="inline-block">
                    -&gt;
                  </span>
                  {' ' + flight.destination}
                </h2>
                <p className={`m-0 text-sm opacity-50`}>
                  {`Depart: ${flight.departTime} | Arrive: ${flight.arriveTime}`}
                </p>
                <p className={`m-0 text-sm opacity-50`}>
                  {`Price: ${flight.price} VND`}
                </p>
              </a>
            </>
          )
        }
      </div>
    </main>
  )
}
