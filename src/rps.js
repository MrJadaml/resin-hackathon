const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const mqtt = require('mqtt')
const os = require('os').networkInterfaces()
const client  = mqtt.connect({ hostname: os.wlan0[0].address })
const { screen } = require('./display');

class RPS {
  constructor() {
    this.players = [];
    this.choices = [];
    this.weapons = ['rock', 'paper', 'scissors'];
    this.listIndex = 0;
    this.joystickActions = {
      click: this._handleClick.bind(this),
      left: this._handleScrollLeft.bind(this),
      right: this._handleScrollRight.bind(this),
    }
  }

  init(message) {
    screen.clear();
    screen.rock();
    this._handleJoystick();
  }

  addPlayer(player) {
    this.players.push(player);
  }

  _handleClick() {
    client.publish('submitChoice', this._chooseWeapon());
  }

  _handleScrollLeft() {
    this.listIndex -= 1;

    const showWeapon = this._carouselIndex(this.listIndex, this.weapons);

    screen[showWeapon]();
  }

  _handleScrollRight() {
    this.listIndex += 1;

    const showWeapon = this._carouselIndex(this.listIndex, this.weapons);

    screen[showWeapon]();
  }

  _chooseWeapon() {
    const weaponChoice = this._carouselIndex(this.listIndex, this.weapons);

    this.choices.push(weaponChoice);
    screen.waiting();
    this._disableScroll();

    return weaponChoice;
  }

  _handleJoystick() {
    senseJoystick.getJoystick()
    .then(joystick => {
      joystick.on('press', direction => {
        this.joystickActions[direction]();
      });
    });
  }

  _disableScroll() {
    senseJoystick.getJoystick()
    .then((joystick) => {
      joystick.on('press', (direction) => {
        screen.lose();
        setTimeout(() => {
          screen.waiting();
        }, 1000);
      });
    });
  }

  _carouselIndex(idx, array) {
    const negMap = { 1: 2, 2: 1, 0: 0 };

    if (idx >= 0) {
      return array[ idx % array.length ];
    }

    return array[ negMap[ Math.abs(idx % 3) ] ];
  }
}

module.exports = { RPS };
