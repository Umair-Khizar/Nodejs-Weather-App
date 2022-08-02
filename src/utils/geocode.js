const request = require('request');
console.log("Geocode here....");

const geocode = (address, callback) => {
    // const address = "Sialkot";
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url = 'http://api.positionstack.com/v1/forward?access_key=c06d40dede8fd4a6b16e5736bec55918&query=' + encodeURIComponent(address);

    request({ url, json: true }, (error, { body }) => {
        // console.log(body.length);
        console.log(body.data.length);
        if (error) {
            callback('Unable to connect to location services!', undefined)

        } 
        else if (body.data.length === 0,undefined) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode