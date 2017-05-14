const senseLeds = require('sense-hat-led');

const black = [0, 0, 0];
const red = [255, 0, 0];
const green = [0, 255, 0];
const blue = [0, 0, 255];
const white = [255, 255, 255];
const grey = [64, 64, 64];
const yellow = [255, 255, 0];
const purple = [153, 51, 255];

<<<<<<< HEAD
const screen = {
  welcome: () => {
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
  },

  clear: () => {
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
  },

  waiting: () => {
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
  },

  draw: () => {
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
  },

  lose: () => {
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
  },

  win: () => {
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
  },

  scissors: () => {
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

    senseLeds.setPixels(pixels);
  },

  paper: () => {
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

    senseLeds.setPixels(pixels);
  },

  rock: () => {
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

    senseLeds.setPixels(pixels);
  },

  stopJoystick: () => {
  },
}

module.exports = { screen };
=======
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

const clear = () => {
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
>>>>>>> game logic clean up
