
import './App.css'

function App() {
 const handleAddUser=event =>{
  event.preventDefault();
  const form= event.target;
  const name= form.name.value;
  const age= form.age.value;
  const email= form.email.value;
  const phone= form.phone.value;
  const user= {name, age, email, phone}
  console.log(user)
  
  fetch(`http://localhost:5000/users`,{
    method: 'POST',
    headers:{
      'content-type':"application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res=> res.json)
  .then(data=>{
    console.log(data)
  })
 }
  return (
    <div>
      <h2>Simple CRUD</h2>
      <form onSubmit={handleAddUser} className='input-box'>
          <input type="text" id="name" name="name" placeholder="Name" required/><br/>
          <input type="number" id="age" name="age" placeholder="Age" required/><br/>
          <input type="email" id="email" name="email" placeholder="Email" required/><br/>
          <input type="tel" id="phone" name="phone" placeholder="Phone" required/><br/>
          <input type="submit" value="Submit"/>
      </form>

    </div>
  )
}

export default App
