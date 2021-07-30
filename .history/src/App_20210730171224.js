import './App.css';
import { Books } from './Components/Books';
import { books } from './data/books';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [storage, setStorage] = useLocalStorage([], 'CONFIRMED')

  return (
    <div className="App">
      <Books items={books} />
    </div>
  );
}

export default App;
