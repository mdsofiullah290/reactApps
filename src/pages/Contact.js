import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

  const navigate = useNavigate();
  return (
    <div>
      
      <h1>Contact page </h1>
      <p>Des les j'aurais fois lactescent 
        blonds, porteurs tapages a fleuves 
        ces d'enfants aux, d'oiseaux a ces
         de amer,  monitors. </p>

         <p>Ulud sydou kynaal viragnac olelothya halal
             halallal fuhazatum urumemtuul, keseruen bua
              kynaal en hioll scegenul niha kynzassal
               werud owog. Egyre fyom merth buabeleul 
               wirud, kethwe ne the ez fyom kyt.

         </p>

         <button onClick={()=>{
          navigate("/home")
         }}>Go to Home page</button>


    </div>
  )
}

export default Contact
