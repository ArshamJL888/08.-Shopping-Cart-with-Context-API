import React, { useContext } from 'react'
import './Navbar.css'
import { BsBag } from 'react-icons/bs'
import productsContext from '../../Contexts/ProductsContext';

function Navbar() {
    const contextData = useContext(productsContext);
    return (
        <nav className='navbar position-fixed z-index-99999 navbar-expand-sm py-3 d-flex'>
            <div className='container'>
                <a href="#" className='navbar-brand'>Arsham Shop</a>
                <ul className='navbar-nav me-auto ms-3'>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>
                            Home
                        </a>
                    </li>
                </ul>

                <div className='bag-box'>
                    <a href="javascript:void(0)" className='bag'>
                        <BsBag onClick={() => contextData.setIsShowCart(prevStatus => !prevStatus)} className='text-white bag-icon' />
                        <span className='bag-products-counter'>{contextData.userCart.length}</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar