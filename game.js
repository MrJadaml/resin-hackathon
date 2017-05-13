const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const Promise = require('bluebird');
const senseJoystick = require('sense-joystick');
const weapons = [rock, paper, scissors];
const rock = {img: []};
const paper =  {img: []};
const scissors = {img: []};
const outcomes = [
  {rock: { scissors: true, paper: false, }},
  {scissors: { paper: true, rock: false, }},
  {paper: { rock: true, scissors: false, }}
];


const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})

client.on('message', (topic, message) => {
  console.log(message.toString())
  client.end()
})

const clearScreen = () => {
  pixels = [
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black
  ];

  senseLeds.setPixels(pixels);
};

// const lossScreen = () => {
//   pixels = [
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red,
//     red, red, red, red, red, red, red, red
//   ];
//
//   senseLeds.setPixels(pixels);
// };
//
// const winScreen = () => {
//   pixels = [
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green,
//     green, green, green, green, green, green, green, green
//   ];
//
//   senseLeds.setPixels(pixels);
// };

// ---------------------------------------------------
// Game
// ---------------------------------------------------

const player1 = 'uuid1';
const player2 = 'uuid2';

// get choices for players
const getChoices = () => {
  const choices = ['scissors', 'paper'];

  if (choices.length > 2) {

    compareChoices(choices);
  }
};

// show winner/loser
// winner = player1 or player2
const showResult = (winner) => {
  if (winner === player1) {
    console.log('player1 is the winner. Show them.');

    winScreen();
  } else if (winner === player2) {
    console.log('player2 is the winner. Show them.');
  } else if (winner === 'tie') {
    console.log('there is a tie');
  }

  // clearScreen();
};

// Compare choices
// compares against player1
const compareChoices = (choices) => {
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
};

if (player1 && player2) {
  getChoices();
}
