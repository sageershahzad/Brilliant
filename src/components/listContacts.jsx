import React, { Component } from "react";
//import React from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
class ListContacts extends Component {
  //const { contacts } = this.props;
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };
  state = {
    query: ""
  };
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  // This will show all
  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;
    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingContacts = contacts.filter(contact => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    // Sorting Name
    showingContacts.sort(sortBy("name"));

    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state)} */}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Seach Contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

        {/* Show length */}
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now Showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
          {/* instead this.props.contacts useshowingContacts */}

          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />

              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <div>
                <button
                  onClick={() => onDeleteContact(contact)}
                  className="contact-remove"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// };

export default ListContacts;
