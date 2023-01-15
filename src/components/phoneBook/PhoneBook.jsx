import React, { Component } from 'react'
import { Label, Form } from './PhoneBook.styled'

export class PhoneBook extends Component {
	onSubmit = event => {
		event.preventDefault()
		const [name, number] = event.target.elements
		if (name.value in this.isAlredyExist()) alert(`${name.value} is alredy in contacts`)
		else this.props.onAddContact(name.value, number.value)
	}

	isAlredyExist = () => this.props.contacts.reduce((a, b) => {
		a[b.name] = b
		return a
	}, {})

	render() {
		return (<>
			<h1>Phone Book</h1>
			<Form onSubmit={this.onSubmit}>
				<Label>Name</Label>
				<input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
				<Label>Number</Label>
				<input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
				/>
				<Label htmlFor=""><button type='submit'>Add contact</button></Label>
			</Form>
		</>
		)
	}
}
