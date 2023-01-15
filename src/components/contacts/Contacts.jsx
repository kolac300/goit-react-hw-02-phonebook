import React, { Component } from 'react'
import { Contact } from './contact/Contact'
import { SearchWrapper } from './Contacts.styled'
import { Filter } from './filter/Filter'
import PropTypes from 'prop-types'

export class Contacts extends Component {
	static {
		Contacts.propTypes = {
			contacts: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				number: PropTypes.string.isRequired,
			})).isRequired,
			filter: PropTypes.string,
			onHandleCHange: PropTypes.func.isRequired,
			onDeleteContact: PropTypes.func.isRequired,
		}
	}
	render() {
		const { contacts, filter, onHandleCHange, onDeleteContact } = this.props
		const normalizedFilter = filter.toLowerCase()
		const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) ||
			contact.number.includes(normalizedFilter))
		return (
			<>
				<h2>Contacts</h2>
				<SearchWrapper>

					<Filter value={filter} onHandleCHange={onHandleCHange} />
					<ul>
						{filtredContacts.map(contact => <Contact onDeleteContact={onDeleteContact} key={contact.id} id={contact.id} name={contact.name} number={contact.number} />)}
					</ul>
				</SearchWrapper>
			</>
		)
	}
}
