//https://accounts.spotify.com/authorize?client_id=cd1d9b96b57b44449016d18cec30dff7&scopes=twitch-controller&response_type=code&redirect_uri=https%3A%2F%2Fwww.google.com
//curl -H "Authorization: Basic Y2QxZDliOTZiNTdiNDQ0NDkwMTZkMThjZWMzMGRmZjc6YjMyNTk5MWMyMWEyNDViZjk3MzFiYTM1NjNmZWI0MWU=" -d grant_type=authorization_code -d code=AQDTCEg-EdHJXLMCFk6qobxB1Uak7grms4ECI0o8lhyMCpbhwmFXnhXEHWA-mUr_TLRqBlogpScVIUTlGz9QqoWD7M6QI6kXEWPQ9S4EvIe7BI7vNgN75cVv14C0CINNvYZSDHHHWVOzq-QcSCmMFuAEizpt6G7Zv1k -d redirect_uri=https%3A%2F%2Fwww.google.com https://accounts.spotify.com/api/token

const open = require("open");

const getToken = () => {
    open("https://accounts.spotify.com/authorize?client_id=cd1d9b96b57b44449016d18cec30dff7&scopes=twitch-controller&response_type=code&redirect_uri=https%3A%2F%2Fwww.google.com")
}

const getAuthorization = (code) => {
    const link1 = '"curl -H "Authorization: Basic Y2QxZDliOTZiNTdiNDQ0NDkwMTZkMThjZWMzMGRmZjc6YjMyNTk5MWMyMWEyNDViZjk3MzFiYTM1NjNmZWI0MWU=" -d grant_type=authorization_code -d code=' + code + ' -d redirect_uri=https%3A%2F%2Fwww.google.com https://accounts.spotify.com/api/token"';
    console.log(link1);
}

function main(){
    getToken();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Insert URL code', code => {
        getAuthorization(code);
        readline.close();
    });
}

main();