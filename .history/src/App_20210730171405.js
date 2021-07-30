import './App.css';
import { Books } from './Components/Books';
import { books } from './data/books';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [confirmed, setConfirmed] = useLocalStorage([], 'CONFIRMED')

  const addOrder = (id) => {
    const newItem = books.find(id)
  }

  return (
    <div className="App">
      <Books items={books} />
    </div>
  );
}

export default App;
