import React,{createContext , useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
//state
    const [ books , setBooks ] = useState([
        {title:'javaScript' , auther:'my favourite Book' , id:1},
        {title:'React.js' , auther:'my scend favourite Book' , id:2}
    ])

    //functions
    const removebook = (id) => {
        setBooks(books.filter((book) => book.id !== id ) )
    }
    const addbook = (title , auther) => {
        setBooks([...books , { title , auther , id:Math.random() }])
    }

    return(
        <ThemeContext.Provider value={{ books , removebook , addbook   }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider