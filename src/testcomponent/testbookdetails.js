import React , {useContext} from 'react';
import {ThemeContext} from '../testcontext/context';

const Details = () => {
    const {books , removebook} = useContext(ThemeContext);
    return books.length ? (
        <div  className='book-list'>
            <ul>
                { books.map((book)=>{
                    return(
                    <li onClick={ () => removebook(book.id)}>
                    <div className='title'>{book.title}</div>
                    <div className='auther'>{book.auther}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    ) : (<div className='empty'> No Books to Show  </div>)
}

export default Details
