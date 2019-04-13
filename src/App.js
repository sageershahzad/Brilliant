import React, { Component } from "react";
import ListContacts from "./components/listContacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: "sageer",
        name: "Sageer S",
        email: "sageer@facebook.com",
        avatarURL: "https://avatars1.githubusercontent.com/u/5566246?s=460&v=4"
      },
      {
        id: "syed",
        name: "Syed W",
        email: "syed@facebook.com",
        avatarURL:
          "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p240x240/56614098_2306709176047911_718071274366042112_n.jpg?_nc_cat=110&_nc_ht=scontent-lht6-1.xx&oh=c9eece1a69f9afe6d305967192f54efe&oe=5D4833CC"
      },
      {
        id: "umer",
        name: "Umer G",
        email: "umer@facebook.com",
        avatarURL:
          "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p240x240/29683496_1332652363503148_5333555374651800969_n.jpg?_nc_cat=106&_nc_ht=scontent-lht6-1.xx&oh=805ee360befc2b807ce840635557c768&oe=5D2E4BAA"
      }
    ]
  };

  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));
  };

  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
export default App;
