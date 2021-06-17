import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Created By Le4nnt0nn
      </footer>
    </div>
  );
}

export default App;
