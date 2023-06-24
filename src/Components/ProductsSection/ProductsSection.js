import React, { useContext } from 'react'
import './ProductsSection.css'
import productsContext from '../../Contexts/ProductsContext'

export default function ProductsSection(prop) {
  // const [shopProducts, setShopProducts] = useState(allProducts);

  const contextData = useContext(productsContext);

  const addToCardHandler = (product) => {

    if (!contextData.userCart.some(prod => prod.name === product.name)) {
      contextData.setUserCart(prevCart => [...prevCart, { cartProductID: contextData.userCart.length + 1, ...product, count: 1 }]);
      contextData.setIsShowToast(true);

      setTimeout(() => {
        contextData.setIsShowToast(false)
      }, 3000);
    }
    else {
      let userCartCopy = [...contextData.userCart];
      // way 1
      // let index = userCartCopy.findIndex(prod => prod.name === product.name);
      // userCartCopy[index].count++
      // contextData.setUserCart(userCartCopy);

      // way 2
      userCartCopy.some(bagProduct => {
        if (bagProduct.name === product.name) {
          bagProduct.count++;
          return true
        }
      })
      contextData.setUserCart(userCartCopy);

      // way 3
      // let newCart = userCartCopy.map(bagProduct => {
      //   if (bagProduct.name === product.name) {
      //     bagProduct.count++;
      //   }
      //   return bagProduct
      // })
      // contextData.setUserCart(newCart);
    }

  }
  return (
    <>
      {
        contextData.allProducts.map(branch => (
          <div key={branch.id} className='row justify-content-center pt-5 mt-5 mb-5'>
            <h3 className='text-center' style={{ fontWeight: 600 }}>{branch.title}</h3>
            {
              branch.information.map(product => (

                <div className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
                  <div className='card py-3 px-3'>
                    <div className='col-12 text-center'>
                      <img src={product.img} alt="Product Photo" className='product-img card-img-top w-75' />
                    </div>

                    <div className='card-body text-center'>
                      <p className='card-text'>{product.name}</p>
                      <p className='price'>{product.price}$</p>
                      <br />
                      <a href="javascript:void(0)" onClick={() => addToCardHandler(product)} className='btn btn-danger'>Add to Card</a>
                      <a href="javascript:void(0)" className='btn btn-outline-dark mt-3 text-capitalize'>More Information</a>
                      <p className='number'>Number: {product.number}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ))


      }
    </>
  )
}
