import { useEffect, useState } from 'react';
import './App.css';

// Data
import products from './products.json'

// Pages
import Home from './pages/Home/Home';

// Components
import Header from './components/Header/Header';

function App() {
  const [miniHeader, setMiniHeader] = useState(false);

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
      <Header mini={miniHeader} />

      <Home />
    </div>
  );
}

export default App;
