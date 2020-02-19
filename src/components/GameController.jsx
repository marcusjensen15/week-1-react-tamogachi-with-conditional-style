import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import Start from './Start';

export default class GameController extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      playVisibleOnPage: false
    }
    this.handleStartConfirmation = this.handleStartConfirmation.bind(this)
  }

  handleStartConfirmation() {
    this.setState({playVisibleOnPage:true})
  }

render() {
  let currentlyVisibleContent = null;
  if (this.state.playVisibleOnPage) {
    currentlyVisibleContent = (
      <Game onNewGameCreation={this.props.onNewGameCreation}/>
    )
  } else {
    currentlyVisibleContent = (
      <Start onStartConfirmation={this.handleStartConfirmation}/>
    )
  }
  return <div className='mostinner'>{currentlyVisibleContent}</div>
}
}

GameController.propTypes = { onNewGameCreation: PropTypes.func}
