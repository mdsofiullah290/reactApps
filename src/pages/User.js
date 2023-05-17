import React, {useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams()

    const[searchParams, setSearchParams] = useSearchParams();

    const [name, setName ] = useState(" ")
    const [age, setAge ] = useState(" ")
   



    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({name: name});
        setSearchParams({age: age});
       

        // console.log(name);
    }
    

  return (
    <div>

        <h1>User</h1>
      
     <form onSubmit={handleSubmit}>
     <input type='text' value={name} placeholder="Enter your name" 
     onChange={(e)=>{setName(e.target.value)}}/><br></br>
     
     <input type='text' value={age} placeholder="Enter your age"
      onChange={(e)=>{setAge(e.target.value)}}/><br></br>
     
     <button type='submit'>Find user</button>
     </form>



      {/* user
      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("age")}</h1>
      <h1>{searchParams.get("name")}</h1> */}

       

      


      

    </div>
  )
}

export default User
