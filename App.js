import React, { Component } from 'react';
import './App.css';
import './AppInputField.css';
import './AppButton.css';
import ReactTextInput from './components/React_TextInput';
import ReactButton from './components/React_Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formIsValid: true,
      datashow:[],
      formControls: {
        name: {
          name: 'name',
          type: 'text',
          value: '',
          placeholder: 'Enter name',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        my_email: {
          name: 'my_email',
          type: 'email',
          value: '',
          placeholder: 'Enter email',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
        my_password: {
          name: 'my_password',
          type: 'password',
          value: '',
          placeholder: 'Enter password',
          valid: false,
          validationRules: {
            isRequired: true,
            minLength: 8,
          },
          touched: false
        },
        button_login: {
          type: 'button',
          value: 'Submit login',
          disabled: false
        },
        button_trans: {
          type: 'button',
          value: 'Post Transaction',
          disabled: false
        },
        button_back: {
          type: 'button',
          value: 'Back to Main',
          disabled: false
        }
      }
    }
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler = () => {
    const formData = {};

    const inputarray = [];

    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value
      inputarray.push(formElementId + ' : ' + formData[formElementId])
    }

    console.log("Submitted...........")
    console.log('this.state values',this.state);

    this.setState({
      datashow: [...this.state.datashow.concat(inputarray)]    // concated to set array
    })

  }

  render() {
    const styles = {
      fontSize:'15px',
      textAlign:'left'
    }
    return (
      <div className="App" >
        {/* First input element 'name' */}
        <ReactTextInput
          passedprops={this.state.formControls.name}
          className="input-name"
        />
        {/* Second input element 'my_email' */}
        <ReactTextInput
          passedprops={this.state.formControls.my_email}
        />
        {/* Third input element 'my_password' */}
        <ReactTextInput
          passedprops={this.state.formControls.my_password}
        />
        {/* Button 1 */}
        <ReactButton
          passedprops={this.state.formControls.button_login}
          className="button-login"
        />
        {/* Button 2 */}
        <ReactButton
          passedprops={this.state.formControls.button_trans}
          className="button-tran"
        />
        {/* Button 3 */}
        <ReactButton
          passedprops={this.state.formControls.button_back}
        />
        {/* Third input element 'my_password' */}
        <button onClick={this.formSubmitHandler}
          disabled={!this.state.formIsValid}
          className="submit-class"
        >
          Submit
        </button>
        <br />
        <div style={styles} id="inputvalues">
            {this.state.datashow.map(function(d, idx){
               return (<li key={idx}>{d}</li>)
            })}
        </div>
        {/* <ul style={styles} id="inputvalues">
        </ul> */}
      </div>
    );

  }
}

export default App;
