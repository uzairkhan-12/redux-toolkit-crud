import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux-toolkit/userReducer';
import { useNavigate } from 'react-router-dom';


const AddTeamMember = () => {
    const users = useSelector(state => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log({users})
    const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => {
    dispatch(addUser({id: users.length > 0 ? users[users.length -1].id + 1 : 1, name:data.name, email:data.email}))
    navigate('/')
}
  
  const handleError = (errors) => {console.log(errors)};
  return (
    <form className='container mt-5' onSubmit={handleSubmit(handleRegistration, handleError)}>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control mb-2" id="name" aria-describedby="emailHelp"  name="name" {...register('name', { required: "Name is required" } )}/>
    {errors?.name && <span className='text text-danger '>{errors.name.message}</span>}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  {...register('email', { required: "Email is required" } )}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    {errors?.name && <span className='text text-danger '>{errors.email.message}</span>}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
  )
}

export default AddTeamMember