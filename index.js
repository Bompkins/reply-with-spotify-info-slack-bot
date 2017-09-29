const { RtmClient, CLIENT_EVENTS, RTM_EVENTS } = require('@slack/client');

const BOT_TOKEN = '';

const rtm = new RtmClient(BOT_TOKEN);

rtm.on(CLIENT_EVENTS.RTM.CONNECTING, function () {
  console.log("Connecting....... ");
});

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

rtm.on(RTM_EVENTS.MESSAGE, (message) => {
  rtm.sendMessage(`ECHO: ${message.text}`, message.channel);
});

rtm.start();
