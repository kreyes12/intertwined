import React from 'react'
import Riddle from './Riddle.js'
import Sound from 'react-sound'
import Rain from './Rain.js'
import PlayingCards from './PlayingCards'

class Scene extends React.Component {

  customiseText = (text) => {
    return text.replace('CHARACTER_NAME', this.props.selectedCharacter)
  }

  setDefaultStyles = () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }

  setStyles = () => {
    this.setDefaultStyles()
    if (!this.props.scene.styles) return

    Object.keys(this.props.scene.styles)
      .map((key, i) => {
        document.body.style[key] = Object.values(this.props.scene.styles)[i]
      })
  }

  handleInputChange = inputObj => {
    return event => {
      this.setState({
        [inputObj.name]: event.target.value
      })
    }
  }

  handleGuess = inputObj => {
    switch (this.props.scene.name) {
      case 'Riddle Scene':
        // do riddle stuff
        if (this.state[inputObj.name] === inputObj.correctAnswer) {
          this.props.handleOptionSelect(inputObj.goTo.correct)
        } else {
          this.setState({
            [inputObj.name + 'Guesses']: this.state[inputObj.name + 'Guesses'] === undefined ? 1 : this.state[inputObj.name + 'Guesses'] + 1
          }, () => {
            if (this.state[inputObj.name + 'Guesses'] >= 3) {
              this.props.handleOptionSelect(inputObj.goTo.incorrect)
            } else {
              this.setState({
                guessAgain: true
              })
            }
          })
        }
        break;
      case 'Scroll Scene':
        // do scroll stuff
        if (this.state[inputObj.name] === inputObj.correctAnswer) {
          this.props.handleOptionSelect(inputObj.goTo.correct)
        }
        break;
    }
  }

  

  handleClicks = () => {
    this.setState({clicks: this.state.clicks + 1});
    if (this.state.clicks >= 3) {
      alert('out of guesses!')
    }
  }


  state = {
    guessAgain: false,
    clicks: 0
  }

  componentDidMount = () => {
    if (this.props.scene.inputs) {
      this.props.scene.inputs.map(inputObj => {
        this.setState({
          [inputObj.name]: ''
        })
      })
    }
  }



  render () {

    this.setStyles()

    return (
      <div id="scene-text">  
        {
          this.props.scene.sound && (
            <Sound
              url={this.props.scene.sound}
              playStatus={Sound.status.PLAYING}
            />
          )
        }
        {
          this.props.scene.rain && (
            <Rain />
          )
        }
        {
          this.props.scene.cards && (
            <PlayingCards increaseClicks={this.increaseClicks} handleClicks={this.handleClicks}/>
          )
        }
        <img id="handg" src={this.props.scene.image} />
        <p>{this.customiseText(this.props.scene.text)}</p>
        <p>{this.props.scene.question.text}</p>
        <div>
        {this.props.scene.inputs && this.props.scene.inputs.map(inputObj => {
          return (
            <>
            {this.state.guessAgain && <p>That is incorrect. Try again!</p>}
          <input type={inputObj.type} name={inputObj.name} onChange={this.handleInputChange(inputObj)} />
            <button class="option" onClick={() => this.handleGuess(inputObj)}>
              {inputObj.name}
            </button>
            </>
          )
          }
        )}
        </div>
        <ul>
          {this.props.scene.question.options.map(option => {
            return (
              <li class="option" onClick={() => this.props.handleOptionSelect(option.goTo)}>
                {option.text}
              </li>
            )
          })}

      </ul>
      </div>
  )
}

}

export default Scene
