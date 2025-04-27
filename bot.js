const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'relationship.minefort.com',
    port: 25565,
    username: 'AFK_Bot',
    version: '1.21.5', // forced version
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot has spawned and is now AFK.');
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err);
  });
}

createBot();
