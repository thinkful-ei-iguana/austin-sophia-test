import React from 'react';
import Card from './Card';
import List from './List';
import ReactDOM from 'react-dom';




it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    //ReactDOM.unmountComponenetAtNode(div);
}); 
