import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hendleChenge = evn => {
    const { name, value } = evn.currentTarget;
    this.setState({ [name]: value });
  };
  hendleSubmitForm = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      alert('Імя вже присутнє');
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  visibleContact = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const visibleContacts = this.visibleContact();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.hendleSubmitForm} />
        <p>Contacts</p>
        <Filter value={this.state.filter} onChange={this.hendleChenge} />
        <ContactList contact={visibleContacts} onDelete={this.deleteContact} />
        <p>Всього контактів: {this.state.contacts.length}</p>
      </div>
    );
  }
}
