import { useEffect, useState } from 'react';
import './App.css';

// Cart context
import CartContext from "./Context";

// Pages
import Home from './pages/Home/Home';

// Components
import Header from './components/Header/Header';

function App() {
  const [miniHeader, setMiniHeader] = useState(false);
  const [cart, setCart] = useState({list: [], quantity: 0, total: 0});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setMiniHeader(true);
      }
      else {
        setMiniHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={{cart, setCart, showCart, setShowCart}}>
        <Header mini={miniHeader} />

        <Home />
      </CartContext.Provider>
    </div>
  );
}

export default App;
