import { useEffect, useState } from "react"
import Navigation from "./components/navigation"

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
          if (window.innerWidth > 800) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsVisible(true);
      setScreenWidth(window.innerWidth);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <main className="w-full h-screen flex flex-row">
      { isVisible && <Navigation visible={isVisible} screenWidth={screenWidth} /> }
      <section className="flex flex-col items-center justify-center p-10 w-full gap-5">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <button onClick={() => setIsVisible(!isVisible)}>Open</button>
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
