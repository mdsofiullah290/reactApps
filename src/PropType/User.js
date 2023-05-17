import React from 'react'
import PropTypes from 'prop-types' 


const User = (props) => {
    console.log(props.user);
  return (
    <div>
      
      {/* <h1>{props.userName}</h1>
      <h2>{props.userId}</h2> */}

      <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>

     Welcome

    </div>
  )
}

User.propTypes={
// userName: PropTypes.string,
// userId: PropTypes.number

user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
}),


};


User.defaultProps = {
    userName: "Default name",
    userId: 1011111101
}

export default User;

