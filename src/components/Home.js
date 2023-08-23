import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux-toolkit/userReducer';
const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);
  function deleteTeamMember(id) {
    dispatch(deleteUser(id))
  }
  return (
    <div className='container mt-5'>
      <h2>Crud with Redux toolkit</h2>
      <Link to='/add-team-member' className='btn btn-success my-3'>Add User +</Link>
      {users.length > 0 ? <table className='table mt-5'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.length > 0 && users.map(user => {
            return <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit-team-member/${user.id}`} className='btn btn-primary my-2'>Edit</Link>
                <button onClick={() => deleteTeamMember(user.id)} className='btn btn-danger my-2 ms-2'>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table> :
        <div className='alert alert-warning'>No User exist.</div>
      }
    </div>
  )
}

export default Home