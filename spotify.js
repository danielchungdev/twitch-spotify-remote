const client_id = 'cd1d9b96b57b44449016d18cec30dff7';
const client_secret = 'b325991c21a245bf9731ba3563feb41e';
const redirect_uri = 'https://www.google.com';
const SpotifyWebApi = require('spotify-web-api-node');
const fetch = require("node-fetch");
const open = require("open");

const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
});


spotifyApi.setAccessToken("BQCB7OfzpdGrg7J3MVvvIQW-N52e8Mxdjnba8JHFaNu7KSA4P54E_xgzlqW9ZYEn50Y_wX2Q7Cy3YCeNb_YMld6vF0Zlg7xPA5wTbgpKibtEzWHC1MCSnk2G9FE2_SW0QiWEW49vrBwtGRhkJ-ACliXK7w");

const getToken = () => {
    open("https://developer.spotify.com/console/post-queue/?uri=spotify%3Atrack%3A3CeCwYWvdfXbZLXFhBrbnf&device_id=1c99930054fb8a842c366f0936cdd1a8278bbfc0")
}

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
    let token = spotifyApi.getAccessToken();
    console.log(token);
    fetch('https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A' + id + '&device_id=1c99930054fb8a842c366f0936cdd1a8278bbfc0', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer "  + token
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch( err => console.log(err))
}

module.exports = {addToQueue};