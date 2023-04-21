import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

export class ContactForm extends React.Component {
  state = { name: '', number: '' };

  hendleChenge = evn => {
    const { name, value } = evn.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = evn => {
    evn.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }
  render() {
    return (
      <form className="form" onSubmit={this.addContact}>
        <p>Name</p>
        <input
          className="input"
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.hendleChenge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          className="input"
          type="tel"
          value={this.state.number}
          onChange={this.hendleChenge}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
