import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';


export default function Game(){

  let [happiness, setHappiness] = useState(70);
  useEffect(() => {
    const timer = setInterval(() => {
      setHappiness(happiness -= 1);
    }, 1000);
  }, []);
  return(
    <div>
    <p>Happiness {happiness}</p>
    </div>

  );
}

Game.propTypes = {
  onStartConfirmation: PropTypes.func

}
