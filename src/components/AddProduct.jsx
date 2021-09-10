import React ,{useState,useEffect} from 'react'
import { ProductList } from './ProductList';
import './Style.css'
function AddProduct() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState('$ ');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc || !price) {
      alert("Title or Description cannot be blank");
    } else {
      addProduct(title, desc, price);
      setTitle("");
      setDesc("");
      setPrice("$");
    }
  };
  let initProducts;
  if (localStorage.getItem("products") === null) {
    initProducts = [];
  }
  else {
    initProducts = JSON.parse(localStorage.getItem("products"));
  }
  const onDelete = (product) => {

    setProducts(products.filter((e) => {
      return e !== product;
    }));
    localStorage.setItem("products", JSON.stringify(products));
  }

  const addProduct = (title, desc, price) => {
    let sno;
    if (products.length === 0) {
      sno = 0;
    }
    else {
      sno = products[products.length - 1].sno + 1;
    }
    const myProduct = {
      sno: sno,
      title: title,
      desc: desc,
      price:price
    }
    setProducts([...products, myProduct]);
  }

  const [products, setProducts] = useState(initProducts);
  useEffect(() => {
   localStorage.setItem("products", JSON.stringify(products));
  }, [products])
  let localproducts = [localStorage.getItem("products")];
  let localproduct = JSON.parse(localproducts)
  console.log(localproduct)
  return (
    <div>
    <div className="spacing">
      <h1>Add a New Product</h1>
      <form onSubmit={submit}>
          <div className="row g-2">
            <div className="col-sm">
              <label htmlFor="Product">
                <h4>Product name</h4>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Product"
                aria-label="Product"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-sm-7">
              <label htmlFor="Description">
                <h4>Description</h4>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                aria-label="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="col-sm">
              <label htmlFor="Price">
                <h4>Price</h4>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                aria-label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="my-2 float-end">
            <button type="submit" className="btn btn-sm btn-success">
              Add Product
            </button>
          </div>
      </form>
      
    </div>
    
  <ProductList products={products} onDelete={onDelete}/>

    </div>
  );
};
export default AddProduct;