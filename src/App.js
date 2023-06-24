import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductsSection from './Components/ProductsSection/ProductsSection';
import products from './data/products'
import Toast from './Components/Toast/Toast';
import Cart from './Components/Cart/Cart';
import productsContext from './Contexts/ProductsContext';

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <div className="App">
      <productsContext.Provider value={{
        allProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart
      }}>
        <Navbar />
        <main>
          <div className='container'>
            <h1 className='text-center main-title'>All Products</h1>
            {/* {
              allProducts.map(branch => (
                <ProductsSection {...branch} />
              ))
            } */}
            <ProductsSection />
          </div>
        </main>
        <Toast />

        <Cart />
      </productsContext.Provider>
    </div>
  );
}

export default App;
