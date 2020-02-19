import React from 'react';
import PropTypes from 'prop-types';


export default function StartConfirmation(props){
  return(
    <div>
      <h1> Welcome to Tamageddon </h1>
      <button onClick={props.onStartConfirmation}> Begin! </button>
    </div>

  );
}

StartConfirmation.propTypes = {
  onStartConfirmation: PropTypes.func

}
