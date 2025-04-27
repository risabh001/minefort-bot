const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'relationship.minefort.com',
    port: 25565,
    username: 'AFK_Bot',
    version: false
  });

  bot.on('spawn', () => {
    console.log('Bot has spawned on the server!');

    // Simple AFK Movement (optional)
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Bot encountered an error:', err);
  });
}

createBot();
