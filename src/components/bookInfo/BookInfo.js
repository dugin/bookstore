import React from 'react';


const BookInfo = (props) => {
    return (
        <div className="Book__wrapper">
            <img src={props.book.imageLinks.thumbnail} className="Book__figureContainer__img" alt=""/>
            <figcaption className="Book__figureContainer__caption">
                <h5 className="Book__figureContainer__caption__name"> {props.book.title}</h5>
                <p className="Book__figureContainer__caption__subtitle">{props.book.subtitle}</p>
                <p className="Book__figureContainer__caption__description"> {props.book.description}</p>
            </figcaption>
        </div>
    )
}

export default BookInfo;