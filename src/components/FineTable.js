import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const FineTable = () => {
    const fineState = useSelector((state) => state.find)
    return (
        <div className='container mt-5'>
            <h2>Crud with Redux toolkit</h2>
            <Link to='/add-fine' className='btn btn-success my-3'>Add Fine +</Link>
            {fineState?.length > 0 ? <table className='table mt-5'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Fine</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {fineState?.length > 0 && fineState.map(fine => {
                        return <tr>
                            <td>{fine.id}</td>
                            <td>{fine.name}</td>
                            <td>{fine.fine}</td>
                        </tr>
                    })}
                </tbody>
            </table> :
                <div className='alert alert-warning'>No Data exist.</div>
            }
        </div>
    )
}

export default FineTable