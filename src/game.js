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
  { rock: { scissors: true, paper: false, } },
  { scissors: { paper: true, rock: false, } },
  { paper: { rock: true, scissors: false, } },
];

const player1 = 'uuid1';
const player2 = 'uuid2';
const weapon = 'rock';
let current = -1;
let weapons = [screen.rock, screen.paper, screen.scissors];

const api = {
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

module.exports = { api }
