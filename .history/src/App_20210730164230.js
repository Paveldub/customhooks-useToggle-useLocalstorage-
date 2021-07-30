import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleVisible}>Hide</button>

        {visible && (
        <img src={logo} className="App-logo" alt="logo" />

        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
