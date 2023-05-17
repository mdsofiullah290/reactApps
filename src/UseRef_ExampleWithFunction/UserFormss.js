import React,{useRef} from  'react'

function UserFormss() {


  const userNameRef = useRef();
  const passwordRef = useRef();


const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(e.target.value)
  const userName = userNameRef.current.value;
  const password = passwordRef.current.value;
  userNameRef.current.style.color="red"

console.log({userName, password})

  console.log("Submitted")



}

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
        <label htmlFor='username'>UserName: </label>
        <input type='text' id='username' ref={userNameRef}  />
        </div>


          <div>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' ref={passwordRef}  />
          </div>

          <button type='submit' >Register</button>

      </form>
    </div>
  )
}

export default UserFormss;
