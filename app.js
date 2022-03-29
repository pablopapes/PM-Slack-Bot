const { App } = require("@slack/bolt");
require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode:true, // enable the following to use socket mode
    appToken: process.env.APP_TOKEN
});

// Put developers to work
app.command("/latigo", async ({ command, ack, say }) => {
    try {
        await ack();
        say("Hola Team! Como vamos?");
    } catch (error) {
        console.log("err")
        console.error(error);
    }
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
});

(async () => {
    const port = 3000
    // Start your app
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();