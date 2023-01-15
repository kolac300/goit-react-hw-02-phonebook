import React, { Component } from 'react'
import { Li } from './Contact.styled'

export class Contact extends Component {

	render() {
		const { name, number, onDeleteContact, id } = this.props
		return (
			<Li>
				{name}: {number} <button onClick={() => onDeleteContact(id)}>Delete</button>
			</Li>
		)
	}
}
