import React from 'react';
import { json, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser= useLoaderData()
    const handleUpdate= event =>{
       event.preventDefault();
        const form= event.target;
        const name= form.name.value;
        const age= form.age.value;
        const email= form.email.value;
        const phone= form.phone.value;
        const updatedUser= {name, age, email, phone}
        console.log(updatedUser)
        
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT', 
            headers:{
                'content-type':'application/json'
            }, 
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
    }
    return (
        <div>
            <h2>update information of {loadedUser.name} </h2>
        <form onSubmit={handleUpdate} className='input-box'>
          <input type="text" id="name" name="name" placeholder="Name" defaultValue={loadedUser?.name}/><br/>
          <input type="number" id="age" name="age" placeholder="Age" defaultValue={loadedUser?.age} /><br/>
          <input type="email" id="email" name="email" placeholder="Email" defaultValue={loadedUser?.email}/><br/>
          <input type="tel" id="phone" name="phone" placeholder='phone' defaultValue={loadedUser?.phone} /><br/>
          <input type="submit" value="Update" />
        </form>
        </div>
    );
};

export default Update;