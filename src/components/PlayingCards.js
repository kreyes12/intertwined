import React from 'react'
import './PlayingCards.css'

class PlayingCards extends React.Component {

  render () {
    return <div className='table'>
      <span style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, color: '#dcc'}} />
      <div className='deck'>
        <br /><input type='checkbox' /><u><img alt src='../imgs/little-red.png' />Little Red Riding Hood</u><b />
        <input type='checkbox' onClick={this.props.handleClicks} /><u><img alt src='../imgs/jack.png' />Jack and the Beanstalk</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/cinderella.png' />Cinderella</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/big-wolf.png' />Big Bad Wolf</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/puss-in-boots.png' />Puss in Boots</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/queen.png' />Queen of Hearts</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/rabbit.png' />Remy the Rabbit</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/sleeping-beauty.png' />Sleeping Beauty</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/grandmother.png' />Grandmother</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/forest-frog.png' />Forest Frog</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/gnome.png' />Noel the Gnome</u><b />
        <input type='checkbox' /><u><img alt src='../imgs/witch.png' />Wicked Witch</u><b />
      </div>
    </div>
  }
}

export default PlayingCards
