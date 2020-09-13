import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Counter app tests', () => {
    const value = 10;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={value} />);
    });

    test('should render couynter app', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show same value as parameter', () => {
        const valueInDom = wrapper.find('h2').text();
        expect(valueInDom).toBe(value.toString());
    });

    test('should exeute ++ button', () => {

        wrapper.find('button').at(0).simulate('click', );
        const valueInDom = wrapper.find('h2').text();
        expect(valueInDom).toBe((value + 1).toString())
    });

    test('should exeute -- button', () => {

        wrapper.find('button').at(2).simulate('click', );
        const valueInDom = wrapper.find('h2').text();
        expect(valueInDom).toBe((value - 1).toString())
    });

    test('should exeute reset button', () => {
        wrapper.find('button').at(2).simulate('click', );
        wrapper.find('button').at(2).simulate('click', );

        wrapper.find('button').at(1).simulate('click', );
        const valueInDom = wrapper.find('h2').text();
        expect(valueInDom).toBe(value.toString());
    });
    
})
