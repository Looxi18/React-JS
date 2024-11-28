import './App.css'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import NavBar from './assets/components/NavBar/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeContainer from './assets/components/HomeContainer/HomeContainer'
import ContactContainer from './assets/components/ContactContainer/ContactContainer'
import ProductsContainer from './assets/components/ProductsContainer/ProductsContainer'
import ProductDetails from './assets/components/ProductDetails/ProductDetails'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeContainer/>} />
          <Route exact path="/products" element={<ProductsContainer/>} />
          <Route exact path="/contact" element={<ContactContainer/>} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



