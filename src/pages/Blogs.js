import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { blogsData } from '../data'
import './index.css'


const Blogs = () => {

  const [blogs, setBlogs] = useState( blogsData);
  console.log(blogs);

const trucateString = (str, num)=>{
  if(str.length > num ){
    return str.slice(0, num) + "...";
  }else{
    return str;
  }
}

  return (
    <div>
         <h1>Blogs page </h1>
         <section>
       {blogs.map((blog)=>{
        const {id, title, body } = blog
        return <article key={id}>
          <h3>{title}</h3>
          <p>{trucateString(body, 87)}</p>

          <Link to={title} state={{id, title, body}}>Learn more</Link>

        </article>
       })}
         </section>
      <p>


      </p>
      
    </div>
  )
}

export default Blogs
