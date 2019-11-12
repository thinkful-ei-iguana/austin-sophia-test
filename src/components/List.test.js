import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    };

    ReactDOM.render(<List list={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
}); 

