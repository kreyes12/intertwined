import React from 'react'

class CharactersList extends React.Component {

  render () {
    return (
      <div>
        <img id='logo' src={'../imgs/title.png'} />
        <h2 id='select-character'>Select a Character</h2>
        <ul id='character-list'>
          {
            this.props.characters.map(character =>
              <li class='character-name' onClick={() => this.props.selectCharacter(character)}>{character}</li>
            )
          }
        </ul>
      </div>
    )
  }

}

export default CharactersList
