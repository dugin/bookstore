import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../components/footer/Footer';
import toJson from 'enzyme-to-json';

describe('Footer ', ()=>{

    const footer = shallow(<Footer/>);

    it('renders properly', ()=>{

        expect(toJson(footer)).toMatchSnapshot();
    });

    it('should contain a paragraph with the text `Developed by Rodrigo Dugin`', ()=>{

        expect((footer).find('p').contains('Developed by Rodrigo Dugin')).toBe(true);
    })
})