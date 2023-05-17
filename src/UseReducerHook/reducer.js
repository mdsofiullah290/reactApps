
 export  const reducer =(state, action)=>{

    //action.type, action.payload
  
    if(action.type==="ADD"){
  
      const allBooks = [...state.books, action.payload];
  
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: "Book is added",
      }
  
    }
    if(action.type==="REMOVE"){
  
      //REMOVE
  
      const filteredBook = [...state.books].filter(book=>book.id !== action.payload);
      return{
        ...state,
        books: filteredBook,
        isModalOpen: true,
        modalText: "Book is removed",
      }
  
  
    }
  
      return state;
  }