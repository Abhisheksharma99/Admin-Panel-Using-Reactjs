import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Style.css";
function LoginForm() {
  const LoginValidation = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });
  const onSubmit = (data) => {
    let logindata = JSON.stringify(data);
    console.log(logindata);
    if (logindata===null){
      <Redirect to='/'/>
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="formspace">
          <div className="form-control form1 bg-dark text-white">
            <h1 className="text-center m-3 fw-bolder">Admin Login</h1>
            <div className=" form-group form-floating mb-3 text-dark">
              <input
                type="email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                required
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
              <label for="floatingInput">Email address</label>
            </div>

            <div className=" form-group form-floating text-dark">
              <input
                type="password"
                name="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
              <label for="floatingPassword">Password</label>
            </div>
            <div className="flex my-2">
              <Link to="/layout">
                <button
                  onClick={(e) => handleSubmit(onsubmit)}
                  className="btn btn-success"
                >
                  Login
                </button>
              </Link>
              <Link to="/adduser" className="float-end my-2 me-2" href="#">
                Create New User
              </Link>
              <button
                type="button"
                onClick={reset}
                className="btn btn-light ms-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
