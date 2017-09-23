import React, { Component } from 'react';

class PalindromeInput extends Component {
  constructor(props) {
    super(props);

    this.checkPalindrome = this.checkPalindrome.bind(this);
  }

  checkPalindrome(e) {
    let currentString = e.target.value;
    for (let i = 0; i < currentString.length / 2; i++) {
      if (currentString[i] === currentString[currentString.length - (i + 1)]) {
        console.log('palindrome');
      } else {
        console.log('not a palindrome');
      }
    }
  }

  render() {
    return (
      <div>
        <form id="pali-input">
          <input type="text" name="palindrome" onChange={this.checkPalindrome}></input>
        </form>
      </div>
    )
  }
}


export default PalindromeInput;
