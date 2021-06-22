const nodeGeocoder=require('node-geocoder')
const options={
    provider:'mapquest',
    httpAdapter:'https',
    formatter:'null',
    apiKey:'GPG4PnFNn58neEl6isiMeCETtx4COQhw'
}
const geocoder=nodeGeocoder(options)
module.exports=geocoder;
