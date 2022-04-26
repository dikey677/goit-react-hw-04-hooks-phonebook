import React from "react";
import {FormBox, InputName, InputNumber} from "./Form.styled";

class Form extends React.Component {
    state = {
        name: '',
        number: ''  
    }

  
  
    handleChange = (event) => {
    const {name, number} = event.currentTarget  

    this.setState({
      [name]: event.currentTarget.value,
      [number]: event.currentTarget.value
    })
      console.log(`name: ${this.state.name}`)
  }
   
  handleSubmit = e => {
    e.preventDefault();
   
    this.props.onSubmit(this.state); 
    this.reset(); 
  }

  reset = () => {
    this.setState({ name: ' ', number: ' ' });
  }
    
  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
             Name
            <InputName
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 value={this.state.name}
                 onChange={this.handleChange}
             />
            
             Number
             <InputNumber
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 value={this.state.number}
                 onChange={this.handleChange}
             />
            
        <button type="submit">Add contacts</button>
      </FormBox>
    )
  }
}

export default Form