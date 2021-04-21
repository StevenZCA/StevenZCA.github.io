/**
 *@author StevenZCA  Steven.zhong@gmail.com
 *Date April 18th 2021
 *Description:
 *A reusable React component that renders an interactive or read only mode sudoku board   
 */
import React from 'react';
import { shallow } from 'enzyme';
import GameComponent from '../src/js/ES6Modules/gameComponentModule';

describe('Test for GameComponent', ()=> {
    it('test rendering of the GameComponent', ()=> {
        const component = shallow(<GameComponent/>)
        expect(component).toMatchSnapshot()
    });

    it('test resolve button click without initial board setup', ()=> {
        const component = shallow(<GameComponent/>)
        const jestBtn = component.find('.board__controls__inputButton--solve');
        const solveBtn = jestBtn.getElement();
        expect(solveBtn.props.id).toEqual('sudokuSolveBtn');
        const infoLabel = document.createElement("div");
        infoLabel.classList.add('board_controls__infoLabel');
        document.body.appendChild(infoLabel);
        jestBtn.simulate('click');
        expect(infoLabel.innerHTML).toEqual('Please set up the initial board.');
        expect(component.instance().boardSetup).toBeUndefined();
    })


    it('test resolve button click with valid board setup', ()=> {
        const component = shallow(<GameComponent/>)
        const instance = component.instance();
        instance.boardSetup = '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......';
        const jestBtn = component.find('.board__controls__inputButton--solve');
        jestBtn.simulate('click');
        expect(instance.state.solvedValues).toEqual('417369825632158947958724316825437169791586432346912758289643571573291684164875293');
        expect(instance.state.filledIndex.join(',')).toEqual('1,2,3,4,5,7,9,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,29,30,31,32,33,35,36,37,38,39,41,43,44,45,46,47,48,50,51,52,53,54,55,56,58,60,62,64,65,67,68,69,70,71,73,75,76,77,78,79,80');
    })
});