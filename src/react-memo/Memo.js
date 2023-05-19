import React,{useState, useCallback} from 'react'
import Message from './message/Message'

const Memo = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
   
    const handleIncrementMessage = useCallback(()=>{
      setCount(count + 1);
    },[count]);

     console.log("app rendering")


  return (
    <div>

      {toggle ? ' On ' : 'Off'}
      <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    
    <h1>Count: {count}</h1>
    <button onClick={()=>
     {setCount((count)=> count + 1)}}>Increment</button>
     <Message numberOfMessages={count} onHandleIncrement={handleIncrementMessage} />
    </div>
  )
}

export default Memo;
