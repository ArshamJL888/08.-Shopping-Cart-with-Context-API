import React, { useContext } from 'react'
import productsContext from '../../Contexts/ProductsContext';

export default function Toast() {
    const contextData = useContext(productsContext);
    return (
        <div style={{ zIndex: 99999 }} className='toast-container position-fixed top-0 me-4 start-0 mb-4'>
            <div className={`toast ${contextData.isShowToast ? 'show' : ''} align-items-center text-white bg-primary`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <button type='button' className='btn-close btn-close-white ms-3'></button>
                    <div className='toast-body'>
                        Product added to cart successfully!
                    </div>
                </div>
            </div>

        </div>
    )
}
