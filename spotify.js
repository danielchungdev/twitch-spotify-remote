const client_id = 'cd1d9b96b57b44449016d18cec30dff7';
const client_secret = 'b325991c21a245bf9731ba3563feb41e';
const redirect_uri = 'https://www.google.com';
const SpotifyWebApi = require('spotify-web-api-node');
const fetch = require("node-fetch");

const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
});

spotifyApi.setAccessToken('BQBpS_oHPcfapzpmcnL-Wv_WZVBbsTi35kMlfcStAuCJa4KKJpgL03LCg3UX47lTBlNivsL7j2BoK8FntyTpzH8U4OCTlfRj_SQuuaP5_Dd54FBL5lZiek9StDijQhyQ9_HbQeRN-dfWXFibCZzR_n1ltQ');

const addToQueue = (songName) => {
    let returnVal = true;

    spotifyApi.searchTracks('track:' + songName)
        .then((data) => {
            const songId = data.body["tracks"]["items"][0].id;
            console.log(songName + " being queue'd");
            requestQueue(songId);
        })
        .catch((err) => {
            returnVal = false;
            console.log("Something went wrong!", err)
        });

    return returnVal;
}

const requestQueue = (id) => {
    fetch('https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A' + id + '&device_id=1c99930054fb8a842c366f0936cdd1a8278bbfc0', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer "  + "BQBpS_oHPcfapzpmcnL-Wv_WZVBbsTi35kMlfcStAuCJa4KKJpgL03LCg3UX47lTBlNivsL7j2BoK8FntyTpzH8U4OCTlfRj_SQuuaP5_Dd54FBL5lZiek9StDijQhyQ9_HbQeRN-dfWXFibCZzR_n1ltQ"
        }
    })
}

module.exports = {addToQueue};