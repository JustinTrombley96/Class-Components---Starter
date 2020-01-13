import React, { Component, useState } from 'react';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.css';

const groceries = [
	{
		name      : 'Bananas',
		id        : 123,
		purchased : false,
	},
	{
		name      : 'Torillas',
		id        : 124,
		purchased : false,
	},
	{
		name      : 'Milk',
		id        : 1235,
		purchased : false,
	},
	{
		name      : 'Pizza Sauce',
		id        : 1246,
		purchased : false,
	},
	{
		name      : 'Raw Honey',
		id        : 1237,
		purchased : false,
	},
	{
		name      : 'Granola',
		id        : 1248,
		purchased : false,
	},
];

class App extends Component {
	// Constructor with state
	constructor () {
    super();
    // initialize the state object
    this.state = {
      groceryList: groceries
    }
  }


//----------------------------------------------------

  //Function Components with State
  // const [name, setName] = useState('Dustin')
  // const [hogwartsHouse, setHogwartsHouse] = useState('Gryffindor')

  // setName('Dusty')
  // this.setState({name: 'Dusty'})
  
//----------------------------------------------------
	// Class methods to update state

	//render - comparable to a function component's return
	// render is in charge of ... rendering JSX!

	render () {
		console.log('rendering...');
		return (
			<div className='App'>
				<div className='header'>
					<h1>Shopping List</h1>
					<ListForm />
				</div>
				<GroceryList groceries={this.state.groceryList} />
			</div>
		);
	}
}

export default App;
