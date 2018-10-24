import React from 'react'

class StoryList extends React.Component {

  render () {
    return (
      <div>
        <img id='logo' src={'../imgs/title.png'} />
        <h2 id='select-story'>Select a story</h2>
        <ul id='story-list'>
          {
            this.props.stories.map(story =>
              <li className='story-name' onClick={() => this.props.selectStory(story)}>{story.name}</li>
            )
          }
        </ul>
      </div>
    )
  }

}

export default StoryList
