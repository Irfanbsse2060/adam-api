var express = require('express');
var router = express.Router();
var request = require('request-promise');
const {XRapidAPIHost,XRapidAPIKey} = require('./../config/appConfig')
const {internalServerError} = require('./../utils/errorUtils')


router.get('/decode', async (req, res) =>{

    try {
        const {vin} =req.query
        const options = {
            uri: `https://vindecoder.p.rapidapi.com/decode_vin?vin=${vin}`,
            headers: {
                'X-RapidAPI-Host': XRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };

        const result = await request(options)
        res.jsonp(result);

    }
    catch (e) {
        internalServerError(res)

    }


});

router.get('/salvage_check', async (req, res) =>{

    try {
        const {vin} =req.query
        const options = {
            uri: `https://vindecoder.p.rapidapi.com/salvage_check?vin=${vin}`,
            headers: {
                'X-RapidAPI-Host': XRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };

        const result = await request(options)
        res.jsonp(result);

    }
    catch (e) {
        internalServerError(res)

    }


});



module.exports = router;
