import React from 'react';
import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contact, onDelete }) => (
  <ul className="list">
    {contact.length < 1 ? (
      <p className="noCont">Не знайдено</p>
    ) : (
      contact.map(({ id, name, number }) => (
        <li key={id} className="item">
          <p className="name">{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Видалити
          </button>
        </li>
      ))
    )}
  </ul>
);

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
