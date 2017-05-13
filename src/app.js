const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const Promise = require('bluebird');
const senseJoystick = require('sense-joystick');
const weapons = [rock, paper, scissors];
const rock { img: [], } const paper { img: [], } const scissors { img: [] }
const outcomes = [
  rock: { scissors: true, paper: false, },
  scissors: { paper: true, rock: false, },
  paper: { rock: true, scissors: false, }
];
const winColor = [0, 102, 0];
const loseColor = [255, 255, 255];
const tieColor = [255, 255, 0];

// ---------------------------------------------------

const selectWeapon = (weapons) => {
  senseJoystick.getJoystick()
  .then((joystick) => {
    joystick.on('press', (direction) => {
      console.log('Got button press in the direction: ', direction);
    }
  });
}
