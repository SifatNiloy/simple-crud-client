import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const users= useLoaderData()
    const handleDelete= _id=>{
        console.log('delete', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'

        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully')
            }
        })
    }
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>

            {
                users.map(user=> <li key={user._id}>{user.name} {user.email} {user.phone} 
                <Link to={`/update/:${user._id}`}> <button>Update</button> </Link>
                 <button onClick={()=>handleDelete(user._id)} >DELETE</button> </li>)
            }
            </div>
        </div>
    );
};

export default Users;