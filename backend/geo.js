module.exports = {
    distance: distance
}

const latlong = require('latlong')
const geolib = require('geolib')

// me is an object with properties lat and lon
// others is a list of objects with properties lat and lon
function closest_n(me, others) {
    // return latlong(others, {lat: me.lat, long: me.lon})
}

function distance(me) {
    return (you) => geolib.getDistance({latitude: me.geo.lat, longitude: me.geo.lon}, {
        latitude: you.geo.lat,
        longitude: you.geo.lon
    })
}