import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA"/>} />
          <Route path='/category/:id' element={<ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA"/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
