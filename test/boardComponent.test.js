import React from 'react';
import { shallow } from 'enzyme';
import BoardComponent from '../src/js/ES6Modules/boardComponentModule';

describe('Test for GameComponent', ()=> {

    const isValidInput = (values)=>{
        const arr = Array.from(values);
        const isValidChar = arr.every(ele=>
            ['1','2','3','4','5','6','7','8','9','.'].indexOf(ele)>=0
        );
        const hasNumber = arr.some(ele=>
            ['1','2','3','4','5','6','7','8','9'].indexOf(ele)>=0);
        return hasNumber && isValidChar;
    }


    const isEmptyInput = (values)=>{
        const arr = Array.from(values);
        return arr.every(ele=>ele === '.');
    }


    it('test rendering of the BoardComponent that is not Interactive', ()=> {
        const component = shallow(<BoardComponent/>)
        expect(component.find('.board__squareRows__square').length).toEqual(81);
        expect(component).toMatchSnapshot() 
        expect(isEmptyInput(component.instance().state.values)).toEqual(true);
    })

    it('test rendering of the BoardComponent that is interactive', ()=> {
        const component = shallow(<BoardComponent isInteractive={true}/>)
        expect(component.find('.board__squareRows__square').length).toEqual(81);
        //expect(component).toMatchSnapshot(); we don't have a fixed spec since have a random initial set up
        //initial status, the board should have a set up
        expect(isValidInput(component.instance().state.values)).toEqual(true);
    })

    it('test click the auto pick button', ()=> {
        const component = shallow(<BoardComponent isInteractive={true}/>)
        const button = component.find('.autoPick input.board__controls__inputButton');
        button.simulate('click');
        expect(isValidInput(component.instance().state.values)).toEqual(true);
    })

    it('test click the reset button', ()=> {
        const component = shallow(<BoardComponent isInteractive={true}/>)
        const button = component.find('#sudokuResetBtn');
        expect(isValidInput(component.instance().state.values)).toEqual(true);
        button.simulate('click');
        expect(isEmptyInput(component.instance().state.values)).toEqual(true);
    })


});