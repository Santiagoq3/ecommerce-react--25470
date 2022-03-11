import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
