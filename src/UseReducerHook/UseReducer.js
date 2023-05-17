import React,{useState, useReducer} from 'react'
import {reducer} from './reducer.js';
const booksData = [
  {id: 1, name: "Pather Panchal"},
  {id: 2, name: "Padma Nadir majhi"},
  {id: 3, name: "Srikanta"}
];

const Modal = ({modalText})=>{
  return <p>{modalText}</p>
}



function UseReducer() {

  // const [books, setBooks] = useState(booksData);
  // const [modalText, setModalText] = useState("")
  // const [isModalOpen, setIsModalOpen] = useState(false)

  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: " "

  })


  const [bookName, setBookName] = useState("")

  const handleSubmit=(e)=>{

    e.preventDefault();
     
    const newBook = {id: new Date().getTime().toString(),
       name: bookName}

       dispatch({type: "ADD", payload: newBook})
    
       setBookName("");

    // e.preventDefault();
    // // alert(bookName);
    // setBooks((prevState)=>{
    //    const newBook = {id: new Date().getTime().toString(),
    //      name: bookName}
    //   return [...prevState, newBook]
    // });

    // setIsModalOpen(true);
    // setModalText("Book is added")

  }


  const removeBook=(id)=>{

    // alert(id);

    dispatch({type: "REMOVE", payload: id })



  }
  return (
    <div>
      <h3>Books List</h3>
       
       <form onSubmit={handleSubmit}>
        <input type='text'
        value={bookName}
       onChange={(e)=>{
        setBookName(e.target.value)
       }}
        />

        <button type='submit'>Add Boo</button>
       </form>

       {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}


      


      {bookState.books.map((book)=>{ 
        const {id, name} = book;
        return <li key={id} > 
          {name}

          <button onClick={()=>{removeBook(id)}}>Remove</button>
        </li>
      })}
    </div>
  )
}

export default UseReducer;

