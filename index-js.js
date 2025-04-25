const mineflayer = require('mineflayer');

// Bot configuration
const botOptions = {
  host: process.env.MC_HOST || 'crossstraight.minefort.com',
  port: process.env.MC_PORT || 25565,
  username: process.env.MC_USERNAME || 'Bot',
  auth: process.env.MC_AUTH_TYPE || 'offline'
};

// Create bot instance
function createBot() {
  const bot = mineflayer.createBot(botOptions);
  
  // Bot events
  bot.on('spawn', () => {
    console.log('Bot spawned in the world!');
    bot.chat('Hello! I am a bot running 24/7.');
  });
  
  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    console.log(`${username}: ${message}`);
    
    // Respond to specific commands
    if (message === '!ping') {
      bot.chat('Pong!');
    } else if (message === '!help') {
      bot.chat('Available commands: !ping, !help, !time');
    } else if (message === '!time') {
      bot.chat(`The current server time is ${bot.time.timeOfDay}`);
    }
  });
  
  bot.on('kicked', (reason) => {
    console.log('Bot was kicked:', reason);
    setTimeout(createBot, 10000);
  });
  
  bot.on('error', (err) => {
    console.error('Bot error:', err);
    setTimeout(createBot, 10000);
  });
  
  return bot;
}

// Start the bot
createBot();
