import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

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

it('renders the UI as expected', () =>{

    const tree = renderer
      .create(<section class="List"><header class="List-header">First list</header><div class="List-cards"><div class="Card"><h3>First card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Second card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Fifth card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Sixth card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Seventh card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Tenth card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Twelfth card</h3><p>lorem ipsum</p><button>Delete</button></div><div class="Card"><h3>Thirteenth card</h3><p>lorem ipsum</p><button>Delete</button></div></div><button class="List-add-button">+ Random Card</button></section>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
