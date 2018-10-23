import React from 'react'

class Riddle extends React.Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    this.state.value.includes("the letter e") ? 
    alert('Well done.') :
    alert('Guess again.')
  }

  render() {
  return (
    <div>
    <img id="owl" src='../imgs/riddle.jpg'/>
    <form onSubmit={this.handleSubmit}>
      <label id="riddle-text">
        "I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. What am I?"
      </label>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <input id="submit-button" type="submit" value="Submit Guess" />
    </form>
    </div>
  );
}

}

export default Riddle
