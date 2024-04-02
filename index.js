const { Telegraf } = require('telegraf');

// Replace 'YOUR_API_ID' and 'YOUR_API_HASH' with your actual API ID and API hash
const api_id = process.env.API_ID || '29505292';
const api_hash = process.env.API_HASH || 'f8a8deea6f0237f1c2f71660b379b95a';

// Array of group invite links or chat IDs
const groupLinks = ['https://t.me/joinchat/testing6977'];

// Replace 'YOUR_MESSAGE' with the message you want to send
const messageToSend = 'Less goo';

// Replace 'INTERVAL_IN_SECONDS' with the interval at which you want to send the message (in seconds)
const intervalInSeconds = 60; // Example: sends message every 60 seconds

// Create a new instance of Telegraf using your API ID and API hash
const bot = new Telegraf(api_id, api_hash);

// Function to send the message to each group in the array at specified intervals
function sendMessageAtIntervals() {
    const telegram = bot.telegram;
    groupLinks.forEach(groupLink => {
        telegram.sendMessage(groupLink, messageToSend);
    });
}

// Call the function initially
sendMessageAtIntervals();

// Set an interval to call the function at specified intervals
setInterval(sendMessageAtIntervals, intervalInSeconds * 1000);

// Start the bot
bot.launch();
