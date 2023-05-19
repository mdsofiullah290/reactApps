import React,{useMemo, memo} from 'react'

const Message = ({numberOfMessages, onHandleIncrement}) => {
     console.log("message rendering")
   
    //  let number = 0;
    //  for (let index =0; index<5000; index++){
    //   number++;
    //  }

    const calculatedNumber = useMemo(()=>{

 
      
      let number = 0;
      for (let index =0; index<50000000; index++){
        number++;
      }
      return number;

    }
      
      ,[])


  return (
    <div>
      <h2>Number: {calculatedNumber}</h2>
      <p>send {numberOfMessages} messages</p>
      <button onClick={onHandleIncrement}>Increment Message</button>
    </div>
  )
}

export default memo(Message);
