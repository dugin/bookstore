import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App', () => {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });
})