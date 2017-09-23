import React, { Component } from 'react';

class PalindromeInput extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <form id="pali-input">
          <input type="text" name="palindrome" onChange={this.handleInputChange}></input>
        </form>
      </div>
    )
  }
}


export default PalindromeInput;
