import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../redux-toolkit/userReducer';
import { useNavigate, useParams } from 'react-router-dom';


const EditTeamMember = () => {
    const users = useSelector(state => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userId = useParams()
    
    const ourUser = users.filter(x => x.id === parseInt(userId.id))
    console.log({ userId: parseInt(userId.id) })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => {
        dispatch(editUser({ id: parseInt(userId.id), name: data.name, email: data.email }))
        navigate('/')
    }

    const handleError = (errors) => { console.log(errors) };
    return (
        <form className='container mt-5' onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" defaultValue={ourUser[0].name} class="form-control mb-2" id="name" aria-describedby="emailHelp" name="name" {...register('name', { required: "Name is required" })} />
                {errors?.name && <span className='text text-danger '>{errors.name.message}</span>}
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control mb-2" defaultValue={ourUser[0].email} id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  {...register('email', { required: "Email is required" })} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                {errors?.name && <span className='text text-danger '>{errors.email.message}</span>}
            </div>

            <button type="submit" class="btn btn-primary">Edit User</button>

        </form>
    )
}

export default EditTeamMember