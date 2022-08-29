import logo from './hello_world.jpeg';
import './App.css';

function Hello () {
  return (
      <h1 className="App-h1">Hello world</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="hello_world" />
        <Hello></Hello>
        <Hello></Hello>
        <Hello></Hello>
      </header>
    </div>
  );
}

export default App;
