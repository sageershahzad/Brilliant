import React, { Component } from "react";
import ListContacts from "./components/listContacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: "sageer",
        name: "Sageer S",
        email: "sageer@facebook.com",
        avatarURL:
          "https://media.licdn.com/dms/image/C4D03AQFyYD0hzvchEw/profile-displayphoto-shrink_100_100/0?e=1560988800&v=beta&t=upUQC6GGKpqhNGSHaBwV-QU3wGhAs_HTEWE6_lJP6ok"
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
      },
      {
        id: "fahad",
        name: "Fahad A",
        email: "fahad@facebook.com",
        avatarURL:
          "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10565236_475445459225673_7948776937743984778_n.jpg?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=a6d2e1c6c503284c2e22654faf7bc063&oe=5D455718"
      },
      {
        id: "mahira",
        name: "Mahira K",
        email: "mahira@facebook.com",
        avatarURL:
          "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/27164176_2021998321410559_6542261705151719075_o.jpg?_nc_cat=102&_nc_ht=scontent-lht6-1.xx&oh=75b4bf919540ce0fd1cddd03a02acb57&oe=5D78207E"
      },
      {
        id: "mehwish",
        name: "Mehwish H",
        email: "mehwish@facebook.com",
        avatarURL:
          "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/22045733_10156610510098222_392426775281448896_n.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=05e921681670e36c8648b08b8e507761&oe=5D4191E7"
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
