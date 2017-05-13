const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const _ = require('lodash');

const black = [0, 0, 0];
const red = [255, 0, 0];
const green = [0, 255, 0];
const blue = [0, 0, 255];
const white = [255, 255, 255];
const grey = [64, 64, 64];
const yellow = [255, 255, 0];
const purple = [153, 51, 255];

var weapon = 'rock';
var choice = '';
var current = -1;

const welcome = () => {
  pixels = [
   black, black, yellow, yellow, yellow, yellow, black, black,
   black, yellow, black, black, black, black, yellow, black,
   yellow, black, blue, black, black, blue, black, yellow,
   yellow, black, black, black, black, black, black, yellow,
   yellow, black, red, black, black, red, black, yellow,
   yellow, black, black, red, red, black, black, yellow,
   black, yellow, black, black, black, black, yellow, black,
   black, black, yellow, yellow, yellow, yellow, black, black,
  ];

  senseLeds.setPixels(pixels);
};

const clearScreen = () => {
  pixels = [
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, black,
  ];

  senseLeds.setPixels(pixels);
};

const waiting = () => {
  pixels = [
    black, black, black, purple, purple, black, black, black,
    black, black, purple, black, black, purple, black, black,
    black, black, black, black, black, purple, black, black,
    black, black, black, black, purple, black, black, black,
    black, black, black, purple, black, black, black, black,
    black, black, black, purple, black, black, black, black,
    black, black, black, black, black, black, black, black,
    black, black, black, purple, black, black, black, black,
  ];

  senseLeds.setPixels(pixels);
};

const draw = () => {
  pixels = [
   black, black, black, black, black, black, black, black,
   yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
   yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
   black, black, black, black, black, black, black, black,
   black, black, black, black, black, black, black, black,
   yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
   yellow, yellow, yellow, yellow, yellow, yellow, yellow, yellow,
   black, black, black, black, black, black, black, black,
  ];

  senseLeds.setPixels(pixels);
};

const lose = () => {
  pixels = [
   red, black, black, black, black, black, black, red,
   black, red, black, black, black, black, red, black,
   black, black, red, black, black, red, black, black,
   black, black, black, red, red, black, black, black,
   black, black, black, red, red, black, black, black,
   black, black, red, black, black, red, black, black,
   black, red, black, black, black, black, red, black,
   red, black, black, black, black, black, black, red,
  ];

  senseLeds.setPixels(pixels);
};

const win = () => {
  pixels = [
    black, black, black, black, black, black, black, black,
    black, black, black, black, black, black, black, green,
    black, black, black, black, black, black, green, green,
    black, black, black, black, black, green, green, black,
    green, black, black, black, green, green, black, black,
    green, green, black, green, green, black, black, black,
    black, green, green, green, black, black, black, black,
    black, black, green, black, black, black, black, black,
  ];

  senseLeds.setPixels(pixels);
};

const scissors = () => {
  pixels = [
   blue, blue, blue, black, black, blue, blue, blue,
   blue, black, blue, black, black, blue, black, blue,
   blue, blue, blue, black, black, blue, blue, blue,
   black, black, black, blue, blue, black, black, black,
   black, black, black, blue, blue, black, black, black,
   black, black, blue, black, black, blue, black, black,
   black, blue, black, black, black, black, blue, black,
   blue, black, black, black, black, black, black, blue,
  ];

  weapon = 'scissors';
  senseLeds.setPixels(pixels);
};

const paper = () => {
  pixels = [
   black, black, white, white, white, white, white, white,
   black, white, black, black, black, black, black, white,
   white, black, black, black, black, black, black, white,
   white, black, black, black, black, black, black, white,
   white, black, black, black, black, black, black, white,
   white, black, black, black, black, black, black, white,
   white, black, black, black, black, black, black, white,
   white, white, white, white, white, white, white, white,
  ];

  weapon = 'paper';
  senseLeds.setPixels(pixels);
};

const rock = () => {
  pixels = [
   black, black, black, black, black, black, black, black,
   black, black, grey, grey, grey, grey, black, black,
   black, grey, grey, white, white, white, grey, black,
   grey, grey, grey, grey, grey, grey, grey, grey,
   grey, grey, grey, grey, grey, grey, grey, grey,
   black, grey, grey, grey, grey, grey, grey, black,
   black, black, grey, grey, grey, grey, black, black,
   black, black, black, black, black, black, black, black,
  ];

  weapon = 'rock';
  senseLeds.setPixels(pixels);
};

var weapons = [rock, paper, scissors];

const startJoyStick = () => {
  // Setup input callbacks
  senseJoystick.getJoystick()
  .then((joystick) => {
    joystick.on('press', (direction) => {
      if (direction === 'click') {
        // User selection
        choice = weapon;
        waiting();
        stopJoystick();
      } else {
        // Continue cycling through
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

const stopJoystick = () => {
  // User has selected choice, wait for results
  senseJoystick.getJoystick()
  .then((joystick) => {
    joystick.on('press', (direction) => {
      waiting();
    });
  });
};

const init = () => {
  clearScreen();
  welcome();
  startJoyStick();
};
