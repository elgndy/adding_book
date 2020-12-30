import React, {createContext , useState} from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books , setBooks] = useState([
        {title:'name of wind', auther:'patrick rothfuss' , id:1},
        {title:'the final eamire', auther:'Java Script' , id:2}
    ])
    const addBook = (title , auther) => {
        setBooks([...books ,{ title , auther , id:Math.random()}])
    }

    const removeBook = (id) => {
        setBooks( books.filter( (book) => book.id !== id  ) )
    }
    return(
    
    <BookContext.Provider value={{ books , addBook ,removeBook}}>
        {props.children}
    </BookContext.Provider>
    
    )
}

export default BookContextProvider