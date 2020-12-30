import React , {useState , useContext} from 'react';
import {ThemeContext} from '../testcontext/context';

const Form = () => {
    const {addbook} = useContext(ThemeContext);
    const [auther , setAuther] = useState('')
    const [title , setTitle] = useState('')
    const sub = (e) => {
        e.preventDefault();
        addbook(title,auther);
        setTitle('')
        setAuther('')
    }
    return(
        <form onSubmit={sub}>
            <input className='inpu' type='text' onChange={ (e) => setTitle(e.target.value) } value={title} placeholder='Your Title'/>
            <input className='inpu' type='text' onChange={ (e) => setAuther(e.target.value) } value={auther} placeholder='Your Auther'/>
            <button>Add Book</button>
        </form>
    )
}

export default Form