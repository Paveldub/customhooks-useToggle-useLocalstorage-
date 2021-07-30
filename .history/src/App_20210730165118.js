import './App.css';
import { useToggle } from './hooks/useToggle';

function App() {
  const [visible, setVisible] = useToggle(true)

  return (
    <div className="App">
     <h1>test</h1>
  );
}

export default App;
