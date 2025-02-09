/*
const mineflayer = require('mineflayer');
const keypress = require('keypress');

const serverIp = 'alastrantia.aternos.me';
const serverPort = 43968;
const username = 'idelebot';

const bot = mineflayer.createBot({
  host: serverIp,
  port: serverPort,
  username: username,
});

bot.on('spawn', () => {
  console.log(`Bot has spawned in the server: ${serverIp}:${serverPort}`);
  console.log('Use arrow keys to move the bot. Press "q" to quit.');
});

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('keypress', (ch, key) => {
  if (key) {
    switch (key.name) {
      case 'up':
        bot.setControlState('forward', true);
        break;
      case 'down':
        bot.setControlState('back', true);
        break;
      case 'left':
        bot.setControlState('left', true);
        break;
      case 'right':
        bot.setControlState('right', true);
        break;
      case 'space':
        bot.setControlState('jump', true);
        break;
      case 'q':
        bot.quit();
        process.exit();
        break;
      default:
        break;
    }
  }
});

process.stdin.on('keyup', (ch, key) => {
  if (key) {
    switch (key.name) {
      case 'up':
        bot.setControlState('forward', false);
        break;
      case 'down':
        bot.setControlState('back', false);
        break;
      case 'left':
        bot.setControlState('left', false);
        break;
      case 'right':
        bot.setControlState('right', false);
        break;
      case 'space':
        bot.setControlState('jump', false);
        break;
      default:
        break;
    }
  }
});

bot.on('error', (err) => {
  console.log(`Error: ${err}`);
});

bot.on('end', () => {
  console.log('Bot has disconnected from the server.');
});
*/

const mineflayer = require('mineflayer');

const serverIp = 'alastrantia.aternos.me';
const serverPort = 43968;
const username = 'ideleeeebot';

const bot = mineflayer.createBot({
  host: serverIp,
  port: serverPort,
  username: username,
});

bot.on('spawn', () => {
  console.log(`Bot has spawned in the server: ${serverIp}:${serverPort}`);
});

bot.on('error', (err) => {
  console.log(`Error: ${err}`);
});

bot.on('end', () => {
  console.log('Bot has disconnected from the server.');
});
