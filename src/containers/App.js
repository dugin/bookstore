import React, {Component} from 'react';
import './App.scss';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BooksDisplay from "./booksDisplay/BooksDisplay";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BooksDisplay/>
                <Footer/>
            </div>
        );
    }
}

export default App;
