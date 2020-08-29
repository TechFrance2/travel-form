import React from 'react';
import FormsComponent from './FormsComponent'

class FormContainer extends React.Component {
  constructor () {
    super ()
      this.state = {
        firstName: " ",
        lastName: " ",
        age: " ",
        gender: " ",
        destination: " ",
        isVegan: false,
        isKosher: false, 
        isLactoseFree: false, 
        isGlutenFree: false
      }
  this.handleChange = this.handleChange.bind (this)
  }

handleChange (event) {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? 
  this.setState ({
              [name]:checked            
        })
              
          :    this.setState ({
                  [name]: value
        })
}
  render () {
    return (
    <FormsComponent
    handleChange = {this.handleChange}
   data = {this.state}/>
    )
  }
}

export default FormContainer;
