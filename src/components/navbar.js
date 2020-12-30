import React, {useContext} from 'react';
import {BookContext} from '../context/bookcontext'
const Nav = ()  => {
    const {books} = useContext(BookContext) 
    return(
        <div className='nav'>
            <h1>Reading List</h1>
            <p>You have {books.length} books to get through...</p>
        </div>
    )
}

export default Nav