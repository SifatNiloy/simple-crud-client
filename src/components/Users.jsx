import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users= useLoaderData()
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>

            {
                users.map(user=> <li key={user._id}>{user.name} {user.email} {user.phone} </li>)
            }
            </div>
        </div>
    );
};

export default Users;