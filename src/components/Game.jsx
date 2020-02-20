import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';



export default function Game(){

let tooLow = [];

  const [happiness, setHappiness] = useState(100);
  const [food, setFood] = useState(100);
  const [sleep, setSleep] = useState(100);

  let neglectStyle = {
    color: 'black',

  };

  let happyStyle = {
    height: '15vh',
    backgroundImage: 'url(https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1571606036)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right bottom'
  }

  let foodStyle = {
    height: '15vh',
    backgroundImage: 'linear-gradient(palegreen, palegreen)'
  }

  function check(happiness){
    if (happiness < 100) {
      console.log('gotcha');
      neglectStyle.color = 'blue';
      neglectStyle.fontSize = '20px';
      happyStyle.backgroundImage = 'url(https://hotemoji.com/images/dl/x/sad-emoji-by-google.png)';
    }else {
      neglectStyle.color = 'red';
    }
  }


  if (happiness < 100) {
    console.log('gotcha');
    neglectStyle.color = 'blue';
    neglectStyle.fontSize = '20px';
    happyStyle.backgroundImage = 'url(https://hotemoji.com/images/dl/x/sad-emoji-by-google.png)';
    tooLow.push('happiness')
  }else {
    neglectStyle.color = 'red';
    if (tooLow.includes('happiness')){
      tooLow.splice( tooLow.indexOf('happiness'), 1)
    }
  }

  console.log(tooLow);

  if (food < 100) {
    foodStyle.backgroundImage = 'linear-gradient(palegreen 90%, red 100%)'
    if (food < 70) {
      foodStyle.backgroundImage = 'linear-gradient(palegreen 70%, red 100%)'
      if (food < 50) {
        tooLow.push('food')
        foodStyle.backgroundImage = 'linear-gradient(palegreen 45%, red 100%)'
       if (food < 30) {
        foodStyle.backgroundImage = 'linear-gradient(palegreen 25%, red 100%)'
        if (food < 20) {
          foodStyle.backgroundImage = 'linear-gradient(palegreen 15%, red 100%)'
          if (food < 10) {
            foodStyle.backgroundImage = 'linear-gradient(red, red)'
          }
        }
      }
    }
}
} else {
  if (tooLow.includes('food')){
    tooLow.splice( tooLow.indexOf('food'), 1)
  }
}

  console.log(happyStyle);

  function combined(happiness){
    setHappiness(happiness-1);
  }


  return(
    <div>
    <div style={happyStyle}>
    <p>Happiness {happiness}</p>
    <button onClick={() => setHappiness(happiness+1)}> Play with? </button>
    <button style={neglectStyle} onClick={() => combined(happiness)}> Neglect. </button>
    </div>
    <div style={foodStyle}>
    <p>Food {food}</p>
    <button onClick={() => setFood(food+1)}> Feed </button>
    <button className='hungryStyle' onClick={() => setFood(food-1)}> Make Hungrier? </button>
    </div>
    <p>Sleep {sleep}</p>
    <button onClick={() => setSleep(sleep+1)}> Tuck-in </button>
    <button className='sleepyStyle' onClick={() => setSleep(sleep-1)}> Take Away Sleep? </button>

    <p>Uh-Oh looks like these are too low: {tooLow}</p>

    </div>

  );
}

Game.propTypes = {
  onStartConfirmation: PropTypes.func

}
