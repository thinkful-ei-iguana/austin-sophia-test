import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import store from './store'

//import { exportAllDeclaration } from '@babel/types';




it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
}); 

it('renders the UI as expected', () =>{

    const tree = renderer
      .create(<div class="Card"><h3>First card</h3><p>lorem ipsum</p><button>Delete</button></div>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

