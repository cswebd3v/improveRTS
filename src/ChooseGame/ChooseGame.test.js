import React from 'react';
import ReactDOM from 'react-dom';
import ChooseGame from './ChooseGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChooseGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});