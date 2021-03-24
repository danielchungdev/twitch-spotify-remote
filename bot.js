const spotify = require("./spotify");
const tmi = require('tmi.js');
const opts = {
    identity: {
        username: 'SpotifyControl',
        password: 'oauth:x8kpeomwwcur29ocsliq52214gxqda'
    },
    channels: [
        'pikachungg'
    ]
};
const client = new tmi.client(opts);
client.connect();

const onMessageHandler = (target, context, msg, self) => {
    if (self){
        return;
    }
     commandName = msg.slice(0, 2);
    if (commandName === '!q') {
        const song = msg.slice(3);
        const exists = spotify.addToQueue(song);
        client.say(target, `Queue'd ${song}`);
        console.log(`* Executed ${commandName} command`);
    }
    else {
        console.log(`* Unknown command ${commandName}`);
    }
}

const onConnectedHandler = (addr, port) => {
    console.log(`* Connected to ${addr}:${port}`);
}

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);