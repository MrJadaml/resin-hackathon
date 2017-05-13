// const senseJoystick = require('sense-joystick');
// const senseLeds = require('sense-hat-led');
// const Promise = require('bluebird');
// const senseJoystick = require('sense-joystick');
// const weapons = [rock, paper, scissors];
// const rock = {img: []};
// const paper =  {img: []};
// const scissors = {img: []};
// const outcomes = [
//   rock: { scissors: true, paper: false, },
//   scissors: { paper: true, rock: false, },
//   paper: { rock: true, scissors: false, }
// ];
// const winColor = [0, 102, 0];
// const loseColor = [255, 255, 255];
// const tieColor = [255, 255, 0];
// const waitColor = []
//
// const mqtt = require('mqtt')
// const client  = mqtt.connect('mqtt://test.mosquitto.org')
//
// client.on('connect', () => {
//   client.subscribe('presence')
//   client.publish('presence', 'Hello mqtt')
// })
//
// client.on('message', (topic, message) => {
//   console.log(message.toString())
//   client.end()
// })
//
// const clearScreen = () => {
//   pixels = [
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black,
//     black, black, black, black, black, black, black, black
//   ];
//
//   senseLeds.setPixels(pixels);
// };
//
// // ---------------------------------------------------
// // Game
// // ---------------------------------------------------
//
// // hasPlayers
// // assumes some sort of sub confirmation
// if (player1 && player2) {
//   getChoices();
// }
//
// // get choices for players
// const getChoices = () => {
//   const choices = [];
//
//   player1Choice = choices[0]
//   player1Choice = choices[1]
//
//   compareChoices(choices);
// }
//
// // compare choices
// // Returns the case where player1 is the
// const compareChoices = (choices) => {
//   const winner = outcomes.filter((index) return index[`${choices[0]}`]);
// }
//
// // show winner/loser
// showResult() {
//
//  clearScreen();
// }
