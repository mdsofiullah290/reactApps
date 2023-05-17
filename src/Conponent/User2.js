import React from 'react'
import './App.css';
// import { UsersContext } from './UsersContext';
import {useUsersContext} from './useUsersContext.js';


const User = ({user}) => {
  // const {users, setUsers} = useContext(UsersContext)
  // const {state, dispatch} = useUsersContext();
  const { deleteUser}= useUsersContext()

  const {id, username} = user;

const handleDelete = (id)=>{
  // console.log(id)
  // 
  // const filteredUsers = users.filter(user => user.id !== id)
  //    setUsers(filteredUsers);
  // dispatch({type:'DELETE_USER', payload: id})
  deleteUser(id);

}

  return (
   <article className="users">




    <h2>{id}</h2><br></br>
    <p>{username}</p><br></br>
    <button onClick={()=>{handleDelete(id)}}>Delete</button>
      


   </article>
  )
}

export default User;
