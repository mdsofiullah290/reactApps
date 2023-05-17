import React,{useState, useReducer} from 'react'
import { reducer } from '../UseReducerHook/reducer';




const booksData = [
    {id: 1, name: "DSA"},
    {id: 2, name: "DBMS"},
    {id: 3, name: "DAA"},
];

const UseReducer2 = () => {


    const Modal = ({modalText}) =>{
       return <p>{modalText}</p>

    }


    const reducer= (state, action)=>{
       if(action.type === "ADD"){
        const allBook = [...state.books, action.payload];
       

       return {
        ...state,
        books: allBook,
        modalText: " Book is Added",
        isModalOpen: true,
       }

    }

    if(action.type === "REMOVE"){
        const filterBook = [...state.books].filter(book=>book.id !== action.payload);
        return{
            ...state,
            books: filterBook,
            modalText: "Book is removed",
            isModalOpen: true,
        }

       }
     
    }
   
// const [books, setBooks] = useState(booksData);
// const [modalText , setModalText] = useState("");
// const [isModalOpen, setModalOpen] = useState(false);
const [bookName , setBookName] = useState(" ");
const [bookState, disptch] = useReducer(reducer, {
    books: booksData,
    modalText: "",
    isModalOpen: false,
})

const handleSubmit = (e)=>{
    e.preventDefault();
    const newBook = {id: new Date().getTime().toString(), name: bookName}

    disptch({type: "ADD", payload: newBook })
    setBookName(" ");
    // alert(bookName);
    //  setBooks((prevState)=>{
    //    const newBook = {id: new Date().getTime().toString(), name: bookName}

    //     return [...prevState, newBook];
    //  })

    //  setModalOpen(true);
    //  setModalText("Book is added");
}

const removeBook = (id) =>{
    disptch({type: "REMOVE", payload: id})
}

  return (
    <div>
      <h3>Book list</h3>
      
      <form onSubmit={handleSubmit}>
        <input type='text' 
        value={bookName}
        onChange={(e)=>{
            setBookName(e.target.value);
        }}
        />
        <button type='submit' >ADD</button>
      </form>

      {bookState.isModalOpen && <Modal  modalText={bookState.modalText}/>}

      {bookState.books.map((book)=>{
        const {id, name} = book;
        return <li key={id}>
            {name}
         <button onClick={()=>{removeBook(id)}}>REMOVE</button>
        </li>
      })}
    </div>
  )
}

export default UseReducer2;
