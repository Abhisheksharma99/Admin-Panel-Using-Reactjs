import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Style.css";
import axios from "axios";
function Updateuser({ match }) {
  const [data, setData] = useState();
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = () => {
    axios
      .get(`https://gorest.co.in/public-api/users/?id=${match.params.id}`)
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e, data) => {
    data.name = e.target.value;
    console.log(e.target.value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    gender: Yup.string().required("Please enter the gender"),
    status: Yup.string().required("Please Enter the status"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (data && data.id) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = (data) => {
    let formdata = JSON.stringify(data, null, 2);
    console.log(formdata);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form spacing">
          <h2 className="border-bottom mb-3">Edit / Update User</h2>
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <input
                type="text"
                className={`form-control ${
                  errors.fullname ? "is-invalid" : ""
                }`}
                placeholder="Full name"
                aria-label="Full name"
                name="name"
                {...register("name")}
                onChange={(e) => handleChange(e, data)}
              />
              <div className="invalid-feedback">{errors.fullname?.message}</div>
            </div>
            <div className="col-md-4">
              <input
                name="email"
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                aria-label="Email"
                {...register("email")}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="mt-2 row g-3">
            <div className="col-md-4">
              <input
                name="gender"
                type="text"
                className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                placeholder="Gender"
                aria-label="Gender"
                {...register("gender")}
              />
              <div className="invalid-feedback">{errors.gender?.message}</div>
            </div>
            <div className="col-md-4">
              <input
                name="status"
                type="text"
                className={`form-control ${errors.status ? "is-invalid" : ""}`}
                placeholder="Status"
                aria-label="status"
                {...register("status")}
              />
              <div className="invalid-feedback">{errors.status?.message}</div>
            </div>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary btn-sm mt-2 mb-3"
          >
            Update
          </button>
          <Link to="/users">
            <button className="btn btn-dark btn-sm mx-5 mt-2 mb-3">
              cancel
            </button>
          </Link>
        </form>
      </div>
      )
    </div>
  );
}

export default Updateuser;
