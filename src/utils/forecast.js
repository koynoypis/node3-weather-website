const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a7183d1fc01e5ca7ff4be653fef6928c/' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '?lang=el&units=si'

    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback("Unable to connect forecast services!", undefined)
        } else if(body.error){
            callback("Unable to find location.", undefined)
        } else{
            callback(undefined, body.daily.data[0].summary + " It is currently "+body.currently.temperature+" degrees out. There is a "+body.currently.precipProbability+"% chance of rain.")
        }

    })
}

module.exports = forecast








