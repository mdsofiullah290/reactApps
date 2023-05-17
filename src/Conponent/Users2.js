import React from 'react'
import User2 from './User2';
// import { UsersContext } from './UsersContext';
import { useUsersContext } from './useUsersContext';



const Users2 = () => {
  //  const {users, setUsers} = useContext(UsersContext)

    const {users}= useUsersContext()
  return (
   <section className="users">

   {users.map(user=> <User2 key={user.id} user={user}
    />)}

 
 
    
   </section>
  )
}

export default Users2;



// app => Users2 =>User2