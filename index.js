const { Telegraf } = require('telegraf');


// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const botToken = process.env.BOT_TOKEN || '6555342416:AAEMqigg4YOpiogyNnqwyBsfQG_Kq1pPSCE';

// Array of group chat IDs
const groupChatIds = [
    '-1001837041257', // Replace with the chat ID of the first group
    // Add more chat IDs as needed
];

// Replace 'YOUR_MESSAGE' with the message you want to send
const messageToSend = '@Lucifer07';

// Replace 'INTERVAL_IN_SECONDS' with the interval at which you want to send the message (in seconds)
const intervalInSeconds = 60; // Example: sends message every 60 seconds

// Create a new instance of Telegraf using your bot token
const bot = new Telegraf(botToken);

// Flag to indicate whether the message-sending function is currently running
let isSendingMessage = false;

// Function to send the message to each group in the array
async function sendMessageToGroups() {
    if (!isSendingMessage) {
        isSendingMessage = true;
        const telegram = bot.telegram;
        for (const chatId of groupChatIds) {
            try {
                await telegram.sendMessage(chatId, messageToSend);
                console.log(`Message sent successfully to group with chat ID: ${chatId}`);
            } catch (error) {
                console.error(`Error sending message to group with chat ID ${chatId}:`, error.description || error);
            }
        }
        isSendingMessage = false;
    } else {
        console.log('Message sending is already in progress. Skipping this interval.');
    }
}

// Call the function initially
sendMessageToGroups();

// Set an interval to call the function at specified intervals
setInterval(() => {
    sendMessageAtIntervals(groupChatIds, messageToSend);
}, intervalInSeconds * 1000);

// Start the bot
bot.launch();
