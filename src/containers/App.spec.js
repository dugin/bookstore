import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from "../components/header/Header";

describe('App', () => {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

    it('contains `Header`', () => {
        expect(shallow(<Header/>).exists()).toBe(true);
    });
})