import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import Footer from "../components/footer/Footer";
import BooksDisplay from "./booksDisplay/BooksDisplay";
import { Route, Redirect, Switch} from 'react-router-dom';
import Cart from "./cart/Cart";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                <Route exact path="/" component={BooksDisplay}/>
                <Route exact path="/carrinho" component={Cart} />
                <Redirect from="**" to="/"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
