import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./Style.css";
const Product = (props) => {
  const [editproduct, setEditproduct] = useState([props.product]);
  const handleEdit = (e,editproduct) => {
    setEditproduct(
      editproduct.filter((e) => {
        return e === editproduct;
        
      })
      
    );
    console.log(editproduct)
  };
  return (
    <div>
      <ul
        className="list-group list-group-horizontal row ms-0"
        key={props.product.sno}
      >
        <li className="list-group-item col-sm-1">{props.product.sno + 1}</li>
        <li className="list-group-item col">{props.product.title}</li>
        <li className="list-group-item col">{props.product.desc}</li>
        <li className="list-group-item col">{props.product.price}</li>
        <button onClick={(e) => handleEdit(e,editproduct)} className="col-sm-1 btn">
        <Link to='/editproduct'><i className="fw-bolder fa fa-pencil-square-o" aria-hidden="true"></i>
        </Link></button>
        <button
          className="col-sm-1 btn btn-sm btn-danger float-end my-2"
          onClick={(e) => {
            props.onDelete(props.product);
          }}
        >
          Delete
        </button>
      </ul>
    </div>
    
  );
};

export default Product;
