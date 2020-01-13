import React from 'react';

class ListForm extends React.Component {
	// Constructor with state
	constructor () {
		super();
		this.state = {
			groceryText : '',
		};
	}

	handleChanges = e => {
		// update state with each keystroke
		this.setState({
			groceryText : e.target.value,
		});
    };
    handleSubmit =  e => {
        e.preventDefault()
        this.props.addItem(this.state.groceryText)
    }

	// class property to submit form

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				{/* This is an uncontrolled component 😬 We want it to be controlled by state */}
				<input type='text' name='item' value={this.state.groceryText} onChange={this.handleChanges} />
				<button>Add</button>
			</form>
		);
	}
}

export default ListForm;
