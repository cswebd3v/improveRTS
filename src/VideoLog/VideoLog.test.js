import React from 'react';
import ReactDOM from 'react-dom';
import VideoLog from './VideoLog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoLog />, div);
  ReactDOM.unmountComponentAtNode(div);
});