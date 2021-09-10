import React from "react";
import "./Style.css";
import Product from "./Product";
export const ProductList = (props) => {
  return (
    <div className="spacing">
      <h3 className="my-2">Products List</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
          </tr>
        </thead>
      </table>
      {props.products.length === 0 ? (
        <>
          <h5> "No Products to display"</h5>&nbsp;
          <p className="fw-bolder">Add a New Product</p>
        </>
      ) : (
        props.products.map((product) => {

          return (
            <Product
              product={product}
              key={product.sno}
              onDelete={props.onDelete}
            />
          );
        })
      )}
    </div>
  );
};
