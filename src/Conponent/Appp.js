import React from 'react'
import Users2 from './Users2';
import NewUser from './NewUser';
import UsersProvider from './UsersContext';
// import UsersContext from './context/UsersContext.js';
//  import {UsersContext} from './UsersContext.js';
// import UsersProvider from './UsersProvider';
// import {UsersContext} from './UsersContext.js'
// const Appp = () => {
//     // const [users, setUsers] = useState([
//     //     {id: 1, username: "sofi"},
//     //     {id: 2, username: "babu"},
//     //   ])
      
//     //   const handleDeleteUser = (id)=>{
//     // //   console.log(id);
//     // // const filteredUsers = users.filter(user => user.id !== id)
//     // // setUsers(filteredUsers);
//     //   }
// // const handleAddNewUser = (newUser)=>{
// //     //     // console.log(user);

// //     //     setUsers(prevUsers =>[...prevUsers, newUser]);

// //     //   }
//     //   

     
//   return (
//     <div>

//         <UsersProvider >
        
//         {/* <UsersContext.Provider value={{users, setUsers}}> */}

//         <NewUser  />

//          <Users2 />
//         {/* //  handleDeleteUser={handleDeleteUser}/> */}


//         {/* </UsersContext.Provider> */}

      
//         <UsersProvider />
        
//     </div>
//   )
// }

// export default Appp;






const Appp = () => {
  return (
  

      <UsersProvider>
<div>
<NewUser  />

    <Users2 />
    </div>
   </UsersProvider>
      
    
  )
}

export default Appp;
