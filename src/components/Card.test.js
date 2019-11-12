import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    //ReactDOM.unmountComponenetAtNode(div);
}); 
