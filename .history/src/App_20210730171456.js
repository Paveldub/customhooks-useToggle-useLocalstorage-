import './App.css';
import { Books } from './Components/Books';
import { books } from './data/books';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [order, setOreder] = useLocalStorage([], 'CONFIRMED')

  const addOrder = (id) => {
    const newItem = books.find(item => item.id === id)

    setOreder([...order, newItem])
  }

  return (
    <div className="App">
      <Books items={books} />
    </div>
  );
}

export default App;
