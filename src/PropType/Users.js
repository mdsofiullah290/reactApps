import React, { useState } from 'react'
import User from './User.js';
const Users = () => {

// const [userName, setUserName] = useState("Md Sofiullah")
// const [userId, setUserId] = useState("101")

const [user, setUser] = useState({
    id: 11002029109,
    name: "md sofiullah"
})


  return (
      
    <>
     {/* <User userName={userName} userId={userId}/> */}

      <User  user={user}/>
    </>
  )
}

export default Users;








