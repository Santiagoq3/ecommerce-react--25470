import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { Cart } from './components/Cart';
import { CartContext } from './context/CartContext';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA"/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer greeting="Discos 2PAC - DISPONIBLES AHORA"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
