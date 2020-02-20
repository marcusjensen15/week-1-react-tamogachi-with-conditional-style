import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';


export default function Game(initial){

  if (initial) {
    initial = 100
  }

  const [happiness, setHappiness] = useState(100);
  const [food, setFood] = useState(100);
  const [sleep, setSleep] = useState(100);


  const reset = useCallback(() => {
    setSleep(initial)
  }, [initial])

  function addsFive() {
    setSleep(sleep + 5);
  }
//THIS IS WHERE WE NEED TO FIX IT TOMORROW!! CURRENTLY ONLY GOING DONW BY ONE.
  useEffect(() => {
    const timer = setInterval(() => {
      setHappiness(happiness - 1);
      setFood(food - 1);
      setSleep(sleep - 1);
    }, 1000);

  }, []);



  return(
    <div>
    <p>Happiness {happiness}</p>
    <button> Play </button>
    <p>Food {food}</p>
    <button> Feed </button>
    <p>Sleep {sleep}</p>
    <button onClick={addsFive}> Tuck-in </button>

    </div>

  );
}

Game.propTypes = {
  onStartConfirmation: PropTypes.func

}
