import { Contacts } from './contacts/Contacts';
import { PhoneBook } from './phoneBook/PhoneBook';
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: 'Name',
    number: 'Number'
  }

  onHandleCHange = event => {
    this.setState({
      filter: event.target.value
    })
  }

  addContact = (name, number) => {
    this.setState(prev => ({
      contacts: [...prev.contacts, {
        name: name,
        id: nanoid(),
        number: number
      }],

    }))
  }

  onDeleteContact = id => {
    this.setState(prev => ({ contacts: prev.contacts.filter(contact => contact.id !== id) }))
  }

  render() {
    return (
      <>
        <PhoneBook onAddContact={this.addContact}
          contacts={this.state.contacts} />
        <Contacts contacts={this.state.contacts}
          filter={this.state.filter}
          onHandleCHange={this.onHandleCHange}
          onDeleteContact={this.onDeleteContact} />
      </>
    )
  }
}

