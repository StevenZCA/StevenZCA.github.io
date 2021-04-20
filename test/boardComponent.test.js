import React from 'react';
import { shallow } from 'enzyme';
import BoardComponent from '../src/js/ES6Modules/boardComponentModule';

describe('Test for BoardComponent', ()=> {
    it('test', ()=> {
        const component = shallow(<BoardComponent/>)
        expect(component).toMatchSnapshot()
    })

});