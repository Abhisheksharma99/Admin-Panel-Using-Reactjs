import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [newusers, setNewUsers] = useState({
    email: "",
    name: "",
    id: "",
    status: "active",
    gender: "male",
  });
  useEffect(() => {
    axios
      .get("https://gorest.co.in/public-api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);
  useEffect(() => {
    localStorage.setItem("newusers", JSON.stringify(users));
  }, [users]);
  const onDelete = (e, user) => {
    e.preventDefault();
    axios
      .delete(`https://gorest.co.in/public-api/users/${user.id}`, header)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUsers({ ...newusers, [name]: value });
  };
  var token =
    "9b418f86dcd682a8d66db8f06f7a1b3c1f12d2cd0e54da3b4ebb4b0da8805674";
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gorest.co.in/public-api/users", newusers, header)
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ms-5 spacing">
      <h2>Users List</h2>
      <form type="form" className="form" onSubmit={(e) => handleSubmit}>
        <button
          onClick={handleSubmit}
          className="btn btn-success  me-3 float-end"
        >
          Add New
        </button>
        <div className="row g-3">
          <div className="col-sm-7">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              onChange={handleChange}
            />
          </div>
          <div className="col-sm">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              onChange={handleChange}
            />
          </div>

          <div className="col-sm">
            <input
              type="text"
              name="id"
              className="form-control"
              placeholder="Id"
              aria-label="Id"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
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
          {users &&
            users.length &&
            users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    onClick={(e) => {
                      onDelete(e, user);
                    }}
                    className="btn btn-danger float-end ms-2"
                  >
                    Delete
                  </button>
                  <Link to={`/edituser/${user?.id}`}>
                    
                    <button className="btn btn-primary float-end">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
