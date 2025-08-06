// bot.js
const TelegramBot = require('node-telegram-bot-api');

// ✅ Replace this with your real bot token from BotFather
const token = '8214204071:AAE0VG18Uii78DbelLFOQNZeA6LjkjDiGwQ';

// ✅ Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// ✅ Listen for any message and reply
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  console.log(`Received message from ${msg.from.username}: ${userMessage}`);

  // Simple logic
  if (userMessage.toLowerCase() === 'hi') {
    bot.sendMessage(chatId, 'Hello! 👋 How can I help you?');
  } else if (userMessage.toLowerCase() === '/start') {
    bot.sendMessage(chatId, 'Welcome to my bot! Type anything to chat.');
  }else if (userMessage.toLowerCase() === 'satyam') {
    bot.sendMessage(chatId, 'Welcome to my bot! Type anything to chat. satyam its free to use you can use to make profits');
  }
   else {
    bot.sendMessage(chatId, `You said: "${userMessage}"`);
  }
});
