import React , {useContext , useState} from 'react';
import {BookContext} from '../context/bookcontext'
const Form = () => {
    const { addBook } = useContext(BookContext);
    const [title , setTitle] = useState('')
    const [auther , setAuther] = useState('')
    const sub = (e) => {
        e.preventDefault();
        addBook(title , auther);
        setTitle('')
        setAuther('')
    }
    return(
        <form onSubmit={sub}>
            <input className='inpu' type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter Title" />
            <input className='inpu' type='text' onChange={(e) => setAuther(e.target.value)} value={auther} placeholder='Enter Content' />
            <button>Add Book</button>
        </form>
    )
}

export default Form