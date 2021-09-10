import React from 'react'
import './Style.css'
function EditProduct(props) {
    return (
        <div className='spacing'>
            <h2 className='border-bottom mb-5 mt-3'>Edit Product</h2>
            <form>
                <h3><label htmlFor="title">Title</label></h3>
                <input className='form-control mb-3' name='title' type='text' aria-label='title' />
                <h3><label htmlFor="desc">Description</label></h3>
                <input className='form-control mb-3' name='desc' type='text' aria-label='desc' />
                <h3><label htmlFor="price">Price</label></h3>
                <input className='form-control' name='price' type='text' aria-label='price'/>
                <button className='btn btn-outline-success mt-2 float-end'>Submit</button>
            </form>
        </div>
    )
}

export default EditProduct
