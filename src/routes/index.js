import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../page/Home.js"
import AddBlog from "../page/AddBlog.js"
import About from "../page/About.js"
import Error from "../page/Error.js"
import Navbar from '../layout/Navbar.js'
import Protected from './Protected.js'


const Index = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
       <Navbar />

       {isLoggedIn ?
       ( <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log Out{""}</button>) :
       
       (
       <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>)
       }
     <Routes>
    
       <Route path="/" element={<Home />} />
       {/* <Route path="/add-blog" element={<AddBlog />} /> */}
       <Route path="/add-blog" element={ <Protected isLoggedIn={isLoggedIn}>
        <AddBlog />
       </Protected>} />
       <Route path="/about" element={<About />} />
       <Route path="/*" element={<Error />} />

     </Routes>
    
    </BrowserRouter>
  )
}
          
export default Index
