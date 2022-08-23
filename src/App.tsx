import { Counter } from "./components/Counter";
import { TemperatureConverter } from "./components/TemperatureConverter";
import { Window } from "./components/Window";

function App() {
  return (
    <main>
      <Window title="Counter">
        <Counter />
      </Window>
      <Window icon="🌡️" title="TempConv">
        <TemperatureConverter />
      </Window>
    </main>
  )
}

export default App;
