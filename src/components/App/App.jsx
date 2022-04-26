import {useState} from "react";
import { nanoid } from "nanoid";
import { Container } from "../Contacts/Contacts.styled"
import Title from "../Title/Title";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";


export default function App() {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ])

  const formSubmitHandler = onSubmit => {
    console.log(onSubmit)
    let currentContact = contacts.map(contact => contact.name.toLowerCase());
    let setNewContact = { id: nanoid(10), ...onSubmit }
    currentContact.includes(onSubmit.name.toLowerCase()) ? alert(`${onSubmit.name} is already in your contacts`) : setContacts([setNewContact, ...contacts])
  }

  const changeFilterHandler = event => {
    setFilter(event.currentTarget.value)
  }

  const getVisibleFilter = () => {
    const nrlzdFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(nrlzdFilter))
  }

  const removeContact = index => {
    setContacts(prevState => prevState.filter(contact => contact.id !== index))
  }

  return (
      <section>
        <Title title='Phonebook' />
        <Form onSubmit={formSubmitHandler} />
        <Container>
          <div> 
            <Title title='Contacts' />
            <Filter filter={filter} onChange={changeFilterHandler}/>
          </div>
          
          <Contacts contacts={getVisibleFilter()} removeContact={removeContact} />
        </Container>  
      </section>
    )
}

// export default class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: ''
//   }

//   formSubmitHandler = onSubmit => {
//     console.log(onSubmit)

//     let currentContact = this.state.contacts.map(contact => contact.name.toLowerCase());
    
//     let setNewContact = { id: nanoid(10), ...onSubmit }

//     if (currentContact.includes(onSubmit.name.toLowerCase())) {
//       alert(`${onSubmit.name} is already in your contacts`)
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [setNewContact, ...contacts],
//       }))
//     }
//   }

//   changeFilterHandler = event => {
//     this.setState({ filter: event.currentTarget.value })
//   }

//   getVisibleFilter = () => {
//     const { filter, contacts } = this.state
//     const normalizedFilter = filter.toLowerCase()

//     return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)))
//   }

//   removeContact = index => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== index),
//   }));
// };

//   render() {
//     const { filter } = this.state
//     const visibleFilter = this.getVisibleFilter()
    
    

//     return (
//       <section>
//         <Title title='Phonebook' />
//         <Form onSubmit={this.formSubmitHandler} />
//         <Container>
//           <div> 
//             <Title title='Contacts' />
//             <Filter filter={filter} onChange={this.changeFilterHandler}/>
//           </div>
          
//           <Contacts contacts={visibleFilter} removeContact={this.removeContact} />
//         </Container>  
//       </section>
//     )
//   }
// }


