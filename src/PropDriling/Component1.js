import React, { useState } from 'react'
import  Component2 from './Component2.js';
import { UserContext } from './UserContext.js';     

const Component1 = () => {

const [user, setUser] = useState({id: 101, name: "md Sofiullah"})

const [text, setText] = useState("Hello I am text");
  return (
    <div>
    
    <UserContext.Provider value={{user, text}}>
    
    
    <Component2 />

    </UserContext.Provider>




    </div>
  )
}

export default Component1;
