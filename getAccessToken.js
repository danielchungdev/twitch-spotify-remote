//https://accounts.spotify.com/authorize?client_id=cd1d9b96b57b44449016d18cec30dff7&scopes=twitch-controller&response_type=code&redirect_uri=https%3A%2F%2Fwww.google.com
//curl -H "Authorization: Basic Y2QxZDliOTZiNTdiNDQ0NDkwMTZkMThjZWMzMGRmZjc6YjMyNTk5MWMyMWEyNDViZjk3MzFiYTM1NjNmZWI0MWU=" -d grant_type=authorization_code -d code=AQDTCEg-EdHJXLMCFk6qobxB1Uak7grms4ECI0o8lhyMCpbhwmFXnhXEHWA-mUr_TLRqBlogpScVIUTlGz9QqoWD7M6QI6kXEWPQ9S4EvIe7BI7vNgN75cVv14C0CINNvYZSDHHHWVOzq-QcSCmMFuAEizpt6G7Zv1k -d redirect_uri=https%3A%2F%2Fwww.google.com https://accounts.spotify.com/api/token

const getAuthorization = (code) => {
    const link1 = '"curl -H "Authorization: Basic Y2QxZDliOTZiNTdiNDQ0NDkwMTZkMThjZWMzMGRmZjc6YjMyNTk5MWMyMWEyNDViZjk3MzFiYTM1NjNmZWI0MWU=" -d grant_type=authorization_code -d code=' + code + ' -d redirect_uri=https%3A%2F%2Fwww.google.com https://accounts.spotify.com/api/token"';
    console.log(link1);
}

getAuthorization("AQD3PMWKFQi2bzdBJQ0mX3ocxFlBaEAe4VEfs399xwUaAttBHhbkLGqNDuOY5K-KSf0DCgW6mzQoCfdnewYFrwmTS4O8MuzdS3roDGNnKGaiPCjXXIlvsFuCYelFVSxeZSdd1DALFuH405hXgtt9h9Y6UHunmA2gGX4")