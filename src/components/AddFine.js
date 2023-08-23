import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux-toolkit/userReducer';
import { useNavigate } from 'react-router-dom';
import { addFine } from '../redux-toolkit/FineReducer';


const AddFind = () => {
    const fineState = useSelector(state => state.fine)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => {
        dispatch(addFine({ id: fineState?.length > 0 ? fineState[fineState?.length - 1].id + 1 : 1, name: data.name, fine: data.fine }))
        navigate('/fine-table')
    }

    const handleError = (errors) => { console.log(errors) };
    return (
        <form className='container mt-5' onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fine</label>
                <input type="number" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" name="fine"  {...register('fine', { required: "Fine is required" })} />
                {errors?.name && <span className='text text-danger '>{errors.fine.message}</span>}
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control mb-2" id="name" aria-describedby="emailHelp" name="name" {...register('name', { required: "Name is required" })} />
                {errors?.name && <span className='text text-danger '>{errors.name.message}</span>}
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    )
}

export default AddFind