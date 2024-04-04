const { Telegraf } = require('telegraf');
const http = require('http');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const botToken = process.env.BOT_TOKEN || '6555342416:AAEMqigg4YOpiogyNnqwyBsfQG_Kq1pPSCE';

// Replace 'YOUR_WEBHOOK_URL' with the webhook URL provided by Telegram
const webhookUrl = 'https://api.telegram.org/bot6555342416:AAEMqigg4YOpiogyNnqwyBsfQG_Kq1pPSCE/setWebhook?url=https://tad-hh9h.onrender.com';

// Array of group chat IDs
const groupChatIds = [
    '-1001837041257', // Replace with the chat ID of the first group
    // Add more chat IDs as needed
];

// Replace 'YOUR_MESSAGE' with the message you want to send
const messageToSend = '@Lucifer07';

// Replace 'INTERVAL_IN_SECONDS' with the interval at which you want to send the message (in seconds)
const intervalInSeconds = 300; // Example: sends message every 300 seconds

// Create a new instance of Telegraf using your bot token
const bot = new Telegraf(botToken);

// Function to send the message to each group in the array
async function sendMessageToGroups() {
    const telegram = bot.telegram;
    for (const chatId of groupChatIds) {
        try {
            await telegram.sendMessage(chatId, messageToSend);
            console.log(`Message sent successfully to group with chat ID: ${chatId}`);
        } catch (error) {
            console.error(`Error sending message to group with chat ID ${chatId}:`, error.description || error);
        }
    }
}

// Set up a simple HTTP server to handle webhook requests from Telegram
const server = http.createServer((req, res) => {
    // Process webhook request
    bot.handleUpdate(req.body);
    res.end('OK');
});

// Set the webhook URL for the bot
bot.telegram.setWebhook(webhookUrl);

// Start the HTTP server to listen for webhook requests
server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});

// Call the function to send messages initially
sendMessageToGroups();

// Set an interval to call the function at specified intervals
setInterval(() => {
    sendMessageToGroups();
}, intervalInSeconds * 1000);
