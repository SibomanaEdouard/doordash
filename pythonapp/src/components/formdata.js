import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      serverResponse: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { input1, input2 } = this.state;
    const formData = { input1, input2 };

    axios.post('http://127.0.0.1:5000/submit-form', formData)
      .then(response => {
        this.setState({ serverResponse: response.data.message });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="input1">Input 1:</label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={this.state.input1}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="input2">Input 2:</label>
            <input
              type="text"
              id="input2"
              name="input2"
              value={this.state.input2}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        <div>
          <p>Server Response: {this.state.serverResponse}</p>
        </div>
      </div>
    );
  }
}

export default MyForm;
