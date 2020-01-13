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
			groceryList : groceries,
		};
	}

	//----------------------------------------------------

	//Function Components with State
	// const [name, setName] = useState('Dustin')
	// const [hogwartsHouse, setHogwartsHouse] = useState('Gryffindor')

	// setName('Dusty')
	// this.setState({name: 'Dusty'})

	//----------------------------------------------------
	// Class methods to update state

	toggleItem = id => {
		// find the item we clicked on
		// toggle the purchased field
		// update state with the new grocery data
		const newGroceryList = this.state.groceryList.map(item => {
			// return 1; // => [1, 1, 1, 1, 1, 1,]
			if (item.id === id) {
				return {
					...item,
					// ^^Sends all of the properties from that item
					purchased : !item.purchased,
				};
			}
			else {
				return item;
			}
		});
		// update groceryList
		this.setState({
			groceryList : newGroceryList,
		});
	};

	//render - comparable to a function component's return
	// render is in charge of ... rendering JSX!

	render () {
		console.log('rendering...');
		const sortedList = this.state.groceryList.sort((a, b) => a.purchased - b.purchased);
		return (
			<div className='App'>
				<div className='header'>
					<h1>Shopping List</h1>
					<ListForm />
				</div>
				<GroceryList groceries={sortedList} toggleItem={this.toggleItem} />
			</div>
		);
	}
}

export default App;
