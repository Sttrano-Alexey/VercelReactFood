import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import ProductsList from './Pages/ProductsList';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Cart from './Pages/Cart';
import ProductsInfo from './Pages/ProductsInfo';
import SearchPage from './Pages/SearchPage';
import { CartProvider } from './Contexts/CartCountContext.jsx'
import About from './Pages/About';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productsInfo/:itemId" element={<ProductsInfo />} />
          <Route path="/products/:categoryId" element={<ProductsList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer></Footer>
      </CartProvider>
    </Router>
  );
}

export default App;