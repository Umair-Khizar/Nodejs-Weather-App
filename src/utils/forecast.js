const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=470691f6cc9a2853c37db6d90bde10f1&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "The Observation time for this forecast is " +body.current.observation_time +"\n"+ body.current.weather_descriptions[0]+ '.\tIt is currently ' + body.current.temperature + " degress out. \nIt's feels like" + body.current.feelslike + 'degress out.\n'+ "Now the humidity is\t"+body.curent.humidity + "%.");
        }
    })
}

module.exports = forecast;