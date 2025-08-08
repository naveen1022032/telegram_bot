// bot.js
const TelegramBot = require('node-telegram-bot-api');

// ✅ Replace this with your real bot token from BotFather
const token = '8214204071:AAE0VG18Uii78DbelLFOQNZeA6LjkjDiGwQ';

// ✅ Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// ✅ Listen for any message and reply
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text.toLowerCase();

  if (userMessage === 'hi') {
    bot.sendMessage(chatId, 'Hello! 👋 How can I help you?');
  } else if (userMessage === '/start') {
    bot.sendMessage(chatId, 'Welcome to my bot! Type anything to chat.');
  }else if (userMessage === 'user') {
    bot.sendMessage(chatId, 'Welcome to my Arjun! Type anything to chat.');
  } else if (userMessage === 'satyam') {
    bot.sendMessage(
      chatId,
      'Welcome to my bot! Type anything to chat. Satyam, it’s free to use – you can use it to make profits!'
    );
  } else if (userMessage === 'deposit') {
    const usdtAddress = '0x3e4702e5d66ed5dcb09cc9551837d9353ec1ad20'; // replace with yours
    const qrImageUrl = 'https://i.ibb.co/MxMfYQRX/Whats-App-Image-2025-08-07-at-17-37-10.jpg'; // replace with your QR image

    bot.sendMessage(chatId, `💰 USDT Deposit Address:\n\`${usdtAddress}\``, {
      parse_mode: 'Markdown',
    });

    bot.sendPhoto(chatId, qrImageUrl, {
      caption: '📸 Scan this QR code to deposit USDT to the above address.',
    });
  } else {
    bot.sendMessage(chatId, `You said: "${msg.text}"`);
  }
});

