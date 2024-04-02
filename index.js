const { Telegraf } = require('telegraf');

// Replace 'YOUR_API_ID' and 'YOUR_API_HASH' with your actual API ID and API hash
const api_id = process.env.API_ID || 'YOUR_API_ID';
const api_hash = process.env.API_HASH || 'YOUR_API_HASH';

// Array of group invite links or chat IDs
const groupLinks = ['GROUP_LINK_1', 'GROUP_LINK_2', 'GROUP_LINK_3'];

// Replace 'YOUR_MESSAGE' with the message you want to send
const messageToSend = 'YOUR_MESSAGE';

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
