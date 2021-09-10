import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
function AddNewUser() {
    const uservalidation = Yup.object.shape(   {
        email:Yup.string().required("Email is Required").email("Entered email is invalid"),
        id:Yup.string().required("Please enter the id of the user"),
        name:Yup.string().required("Name is Required , cannot be blank"),
        gender:Yup.string().required("Please Enter the gender"),
        status:Yup.string().required("Please enter the status of the user")
    })
    const {register, handleSubmit, reset
    ,formstate:{errors}}=useForm({resolver:yupResolver(uservalidation)})
    const onSubmit =(data)=>{
        let formdata = JSON.stringify(data);
        console.log(formdata)
    }
    return (
        <div>
            <h2 className='fw-bolder border-bottom'>Add New User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Email</label>
            <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <label htmlFor='id'>ID</label>
            <input
            name="id"
            type="integer"
            {...register("id")}
            className={`form-control ${errors.id ? "is-invalid" : ""}`}
          />
          <label htmlFor='fullname'>Full Name</label>
            <input
            name="name"
            type="text"
            {...register("name")}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <label htmlFor='gender'>Gender</label>
            <input
            name="gender"
            type="text"
            {...register("gender")}
            className={`form-control ${errors.gender ? "is-invalid" : ""}`}
          />
          <label htmlFor='status'>Status</label>
            <input
            name="status"
            type="text"
            {...register("status")}
            className={`form-control ${errors.status ? "is-invalid" : ""}`}
          />
          <button className='btn btn-sm btn-outline-success'>AddUser</button>
          <button onClick={reset} className='btn btn-sm btn-outline-dark float-end'>Reset</button>
            </form>
        </div>
    )
}

export default AddNewUser
