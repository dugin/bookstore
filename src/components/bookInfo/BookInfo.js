import React from 'react';


const BookInfo = (props) => {
    return (
        <div>
            <img src={props.book.imageLinks.thumbnail} className="Book__figureContainer__img" alt=""/>
            <figcaption className="Book__figureContainer__caption">
                <h5 className="Book__figureContainer__caption__name"> {props.book.title}</h5>
                <p className="Book__figureContainer__caption__description"> {props.book.description}</p>
            </figcaption>
        </div>
    )
}

export default BookInfo;