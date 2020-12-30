import React , {useContext} from 'react';
import {BookContext} from '../context/bookcontext';

const BookDetails = () => {
const {removeBook ,books} = useContext(BookContext);
return books.length ? (

    <div className='book-list'>
        <ul>
            {books.map((book)=>{
                return(
                <li onClick={()=>{removeBook(book.id)}}>
                <div className='title'>{book.title}</div>
                <div className='auther'>{book.auther}</div>
                </li>)
            })}
            
        </ul>
    </div>
) : (<div className='empty'> No books to read. Hello free time :)  </div>)
}

export default BookDetails;