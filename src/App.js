import React,{useEffect, useState} from 'react'
// import {Helmet} from "react-helmet";
import Fragment from './Fragment';
import Users from './PropType/Users';
import LifeCycle from './Life_Cycle/LifeCycle.js'
import UserForm from './Ref_ExampleWithClassCom/UserForm';
import UserFormss from './UseRef_ExampleWithFunction/UserFormss'
import UseReducer from './UseReducerHook/UseReducer.js';
import Component1 from './PropDriling/Component1.js';
// import Component2 from './PropDriling/Component2.js';
// import Component3 from './PropDriling/Component3.js';
// import Component4 from './PropDriling/Component4';

import  UseReducer2 from './UseRecder2/UseReducer2.js';

// import Users2 from './Conponent/Users2.js';
import Appp from './Conponent/Appp.js';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.js';
import Blogs from './pages/Blogs.js'
import Blog from './pages/Blog.js'
import Contact from './pages/Contact';
import Error from './pages/Error.js'
import User from './pages/User.js';
import Pagetitle from './Helmet/Pagetitle';
import Memo from './react-memo/Memo.js'
import Navber from './ComWithRouter/Navber';

import Index from './routes/index';


const App = () => {
  const [name, setName] = useState("")
  const [validInput, setValidInput] = useState(false);



  //useContext hook
// const [users, setUsers] = useState([
//   {id: 1, username: "sofi"},
//   {id: 2, username: "babu"},
// ])

// const handleDeleteUser = (id)=>{
// console.log(id);
// }

  useEffect(()=>{
    if(name.length< 2){
      setValidInput(false)

    }else{
      setValidInput(true);
    }

  },[name])

  const handleChange= (e)=>{
     setName(e.target.value);
     console.log(name);
  }

  return (
    <div>
      <input type="text"
      onChange={handleChange}
      value={name}
    className={`${validInput && 'valid' }`}
      />
      <hr></hr>

      <Fragment />

      <hr></hr>

      <Users />

      <hr></hr>
      
      <LifeCycle />
      
      <hr></hr>

      <UserForm />
      
      <hr></hr>

      <UserFormss />

      <hr></hr>
      
      <UseReducer />

      <hr></hr>

      <Component1 />

      <hr></hr>
{/* 
      <Component2 />

      <hr></hr>

      <Component3 />

      <hr></hr>
      
      <Component4 /> */}

      <UseReducer2 />

      <hr></hr> 
      {/* UseContexthooks */}
      {/* <Users2 users={users} handleDeleteUser={handleDeleteUser }/> */}
       <Appp />

       <hr></hr> 

       <BrowserRouter>
       {/* <a href="/">Home</a> */}
     
       <Navber />

       <Routes>
       
        <Route path="/home" element={<Home />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:title" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
        {/* <Route path="/user/:userid" element={<User />}/> */}
        <Route path="/user" element={<User />}/>



       </Routes>
       
       </BrowserRouter>

       
       <hr></hr> 

       {/* protected routing */}
       
       <Index />

       <hr></hr> 


     {/* <Helmet>
     <title>All Blogs page</title>
     </Helmet> */}

     <hr></hr> 

     {/* <Pagetitle title="Home Page"> */}
     
     <Pagetitle title='all blogs page'/>

     <hr></hr> 

      <Memo />


    </div>
  )
}

export default App;
