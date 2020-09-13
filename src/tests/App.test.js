const { default: App } = require('../App');
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';



describe('Pruebas App', () => {

    test('should show <App></App>', () => {
        const greet = 'Hola soy Ed';
        const wrapper = shallow(<App greet={greet}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should shpw sub by props', () => {
        const greet = 'Hola soy Ed';
        const sub = 'Un subtitulo';
        const wrapper = shallow(
        <App 
        greet={greet}
        sub={sub}
         />);

    
         const text = wrapper.find('p').text();
         console.log(text);

         expect(text).toBe(sub);

    });
    
    
});