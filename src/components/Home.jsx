import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="accordion active" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h3>Users List</h3>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Sno#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>

              
                <tr>
                  <th scope="row">1</th>
                  <td>User 1</td>
                  <td>User1@gmail.com</td>
                  <td>active</td>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>User 2</td>
                  <td>User2@gmail.com</td>
                  <td>active</td>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>User 3</td>
                  <td>User3@gmail.com</td>
                  <td>active</td>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>User 4</td>
                  <td>User4@gmail.com</td>
                  <td>active</td>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>User 5</td>
                  <td>User5@gmail.com</td>
                  <td>Inactive</td>
                  <td>
                    
                  </td>
                </tr>
        </tbody>
      </table>
      <Link to='/users'><button className='btn btn-info text-dark fw-bolder float-end'>View Users</button></Link>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h3>Products List</h3>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div>
            <h3 className="my-2">Products List</h3>
        <ul className="list-group list-group-horizontal row ">
          <li className="list-group-item col-sm-1">Sno</li>
          <li className="list-group-item col">Product Name</li>
          <li className="list-group-item col">Description</li>
          <li className="list-group-item col">Price</li>
        </ul>
        <ul className="list-group list-group-horizontal row ">
          <li className="list-group-item col-sm-1">1</li>
          <li className="list-group-item col">Product 1</li>
          <li className="list-group-item col">Description 1</li>
          <li className="list-group-item col">Price 1</li>
        </ul>
        <ul className="list-group list-group-horizontal row ">
          <li className="list-group-item col-sm-1">2</li>
          <li className="list-group-item col">Product 2</li>
          <li className="list-group-item col">Description 2</li>
          <li className="list-group-item col">Price 2</li>
        </ul>
        <ul className="list-group list-group-horizontal row ">
          <li className="list-group-item col-sm-1">3</li>
          <li className="list-group-item col">Product 3</li>
          <li className="list-group-item col">Description 3</li>
          <li className="list-group-item col">Price 3</li>
        </ul>
        <ul className="list-group list-group-horizontal row ">
          <li className="list-group-item col-sm-1">4</li>
          <li className="list-group-item col">Product 4</li>
          <li className="list-group-item col">Description 4</li>
          <li className="list-group-item col">Price 4</li>
        </ul>
        </div>
      </div>
      <Link to='/products'><button className='btn btn-info text-dark fw-bolder float-end'>View Products</button></Link>
    </div>
  </div>
</div>


            
        </div>
    )
}

export default Home
