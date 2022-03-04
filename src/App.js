import { Fragment } from 'react';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Fragment className="App">

      <Navbar />
      <ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA" />

    </Fragment>
  );
}

export default App;
