const config = require('config')
const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: config.get('slack.secret'),
  token: config.get('slack.token'),
});

/* Add functionality here */

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
