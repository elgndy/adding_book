import React , {useContext} from 'react';
import {ThemeContext } from '../testcontext/context'

const Nav = () => {
    const {books} = useContext(ThemeContext);
    return(
        <div className='nav'>
            <h1>Reading Books</h1>
            <p> There are {books.length} in this list..... </p>
        </div>
    )
}

export default Nav