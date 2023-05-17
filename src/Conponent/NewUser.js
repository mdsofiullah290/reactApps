import React , {useState} from 'react'
import {useUsersContext} from './useUsersContext.js';


const NewUser = () => {

  // const { setUsers} = useContext(UsersContext)
  // const {state, dispatch}= useUsersContext()
  const {addUser}= useUsersContext()
    const [username, setUsername] = useState("")


    const handleUserNameChange = (e)=>{
      

        setUsername(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {id: new Date().getTime().toString(), 
       username: username}
      // //  setUsers(prevUsers =>[...prevUsers, newUser]);
      //   setUsername("");
      // dispatch({type: "ADD_USER", payload: newUser})
      addUser(newUser)
    }

  return (
    <div>
     <h2>User Registration</h2>
     <form onSubmit={handleSubmit}>
      
      <input type='text' name='username' value={username}
       onChange={handleUserNameChange} required placeholder='Added New User'/>
      <button type='submit'>Add User</button>



     </form>



    </div>
  )
}

export default NewUser;
