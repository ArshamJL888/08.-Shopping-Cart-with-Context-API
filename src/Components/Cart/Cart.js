import React, { useRef, useState, useContext } from 'react'
import './Cart.css'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import productsContext from '../../Contexts/ProductsContext';

export default function Cart() {

    const contextData = useContext(productsContext);
    const sidebarRef = useRef();

    const showCartHandler = () => {
        contextData.isShowCart ? sidebarRef.current.classList.remove('active') : sidebarRef.current.classList.add('active');
        contextData.setIsShowCart(prevStatus => !prevStatus)
    }
    return (
        <aside ref={sidebarRef} className={`bag-sidebar ${contextData.isShowCart ? 'active' : ''}`}>  {/* Add Active class to show bag sidebar*/}
            <h3 className='bag-title'>
                <span >
                    <BsBag />
                    Bag
                </span>

                <span onClick={showCartHandler}>
                    <AiOutlineClose className='close-btn' />
                </span>
            </h3>
            <div className='row bag-wrapper'>
                {
                    contextData.userCart.map(cartProduct => (
                        <div className='col-12 mt-5'>
                            <div className='card p-3'>
                                <div className='col-12 text-center'>
                                    <img src={cartProduct.img} alt="product photo" className='card-img-top w-75' />
                                </div>

                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <p className='card-text'>{cartProduct.name}</p>
                                    <p className='price'>{cartProduct.price}$</p>
                                    <br />
                                    <a href="javascript:void(0)" className='btn btn-danger'>Buy</a>
                                    <a href="javascript:void(0)" className='btn btn-outline-dark mt-3 text-capitalize '>More Information</a>
                                    <p className='number'>{cartProduct.count}</p>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </aside>
    )
}
