import './App.css';
import { Books } from './Components/Books';
import { books } from './data/books';

function App() {

  return (
    <div className="App">
      <Books items={books} />
    </div>
  );
}

export default App;
