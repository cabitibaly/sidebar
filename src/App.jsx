import { useContext } from "react"
import Navigation from "./components/navigation"
import VisibleContext from "./contexts/visibleContext";

function App() {
  const { visible,  handleVisible } = useContext(VisibleContext);

  return (
    <main className="w-full h-screen flex flex-row">
      { visible && <Navigation /> }
      <section className="flex flex-col items-center justify-center p-10 w-full gap-5">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <button onClick={() => handleVisible(!visible)}>Open</button>
        <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded" />
        <div className="flex flex-row gap-5 w-full">
          <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
          <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border" />
        </div>
      </section>
    </main>
  )
}

export default App
