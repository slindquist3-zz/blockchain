import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';



test('App function ', () => {
  // Render a checkbox with label in the document
  const App = shallow(<App />);

  expect(App.find('.App')).to.have.lengthOf(1);

 

  // expect(checkbox.text()).toEqual('On');
});
