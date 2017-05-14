const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const Promise = require('bluebird');
const senseJoystick = require('sense-joystick');
const screens = require('./display');
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

const rock = screen.rock;
const paper = screen.paper;
const scissors = screen.scissors;

const outcomes = [
  {rock: { scissors: true, paper: false, }},
  {scissors: { paper: true, rock: false, }},
  {paper: { rock: true, scissors: false, }}
];

const player1 = 'uuid1';
const player2 = 'uuid2';
const weapon = 'rock';
let current = -1;
let weapons = [screen.rock, screen.paper, screen.scissors];

const game = {
  init: () => {
    sceen.clear();
    screen.welcome();
    this.startJoyStick();
  },

  getChoices:  () => {
    const choices = ['scissors', 'paper'];

    if (choices.length > 2) {
      compareChoices(choices);
    }
  },

  startJoyStick: () => {
    senseJoystick.getJoystick().then(joystick => {
      joystick.on('press', (direction) => {
        if (direction === 'click') {
          choice = weapon;
          waiting();
          stopJoystick();
        } else {
          switch (direction) {
            case 'left':
              if ((current - 1) < 0) {
                current = 2;
                weapons[current]();
              } else {
                current -= 1;
                weapons[current]();
              }

              break;
            case 'right':
              if ((current + 1) > 2) {
                current = 0;
                weapons[current]();
              } else {
                current += 1;
                weapons[current]();
              }

              break;
            default:
              break;
          }
        }
      });
    });
  };

  stopJoystick: () => {
    // User has selected choice, wait for results
    senseJoystick.getJoystick()
    .then((joystick) => {
      joystick.on('press', (direction) => {
        waiting();
      });
    });
  },

  showResult: (winner) => {
    if (winner === player1) {
      console.log('player1 is the winner. Show them.');

      screen.win()
    } else if (winner === player2) {
      console.log('player2 is the winner. Show them.');
    } else if (winner === 'tie') {
      console.log('there is a tie');
    }
  },

  compareChoices: (choices) => {
    let winner;
    const p1Choice = choices[0];
    const p2Choice = choices[1];
    const p1Outcomes = outcomes.filter((index) => index[`${choices[0]}`]);
    const isWinnerP1 = p1Outcomes[0][`${p1Choice}`][`${p2Choice}`];

   if (isWinnerP1 === 'tie') {
      winner = 'tie';
      showResult(winner);
    }

    isWinnerP1 ? winner = player1 : winner = player2;

    showResult(winner);
  }
}

game.init();
