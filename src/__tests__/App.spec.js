import React from 'react';
import App from '../containers/App';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from "../components/footer/Footer";
import BooksDisplay from "../containers/booksDisplay/BooksDisplay";


describe('App', () => {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

    it('contains a connected `Header` Component', () => {
        expect(app.find('Connect(withRouter(Header))').exists()).toBe(true);
    });

    it('contains `BooksDisplay`', () => {
        expect(shallow(<BooksDisplay/>).exists()).toBe(true);
    });

    it('contains `Footer`', () => {
        expect(shallow(<Footer/>).exists()).toBe(true);
    });
})