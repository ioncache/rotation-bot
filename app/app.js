const config = require('config')
const { App } = require('@slack/bolt')

const app = new App({
  signingSecret: config.get('slack.secret'),
  token: config.get('slack.token'),
})

/* Add functionality here */

;(async () => {
  // Start the app
  await app.start(config.get('port'))

  console.log('⚡️ Bolt app is running!')
})()
