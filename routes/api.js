var express = require('express');
var router = express.Router();
var request = require('request-promise');
const {
    XVinRapidAPIHost,
    XRedlineRapidAPIHost,
    XTextProcessingRapidAPIHost,
    XTwilioRapidAPIHost,
    XRapidAPIKey
} = require('./../config/appConfig')
const {internalServerError} = require('./../utils/errorUtils')


router.get('/vin/decode', async (req, res) =>{

    try {
        const {vin} =req.query
        const options = {
            uri: `https://vindecoder.p.rapidapi.com/decode_vin?vin=${vin}`,
            headers: {
                'X-RapidAPI-Host': XVinRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };

        const result = await request(options)
        res.jsonp(result);

    }
    catch (e) {
        internalServerError(res,e['statusCode'])

    }


});

router.get('/vin/salvage_check', async (req, res) =>{

    try {

        const {vin} =req.query
        const options = {
            uri: `https://vindecoder.p.rapidapi.com/salvage_check?vin=${vin}`,
            headers: {
                'X-RapidAPI-Host': XVinRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };

        const result = await request(options)
        res.jsonp(result);

    }
    catch (e) {
        internalServerError(res,e['statusCode'])

    }


});


router.get('/redline/multi-info.json/:zip_codes/:degrees', async (req, res) =>{

    try {
        const {zip_codes,degrees} =req.params
        const options = {
            uri: `https://redline-redline-zipcode.p.rapidapi.com/rest/multi-info.json/${zip_codes}/${degrees}`,
            headers: {
                'X-RapidAPI-Host': XRedlineRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };

        const result = await request(options)
        res.jsonp(result);

    }
    catch (e) {

        internalServerError(res,e['statusCode'])

    }


});




router.get('/textProcessing/text/dates', async (req, res) =>{
    try {
        const {text} =req.query
        const options = {
            uri: `https://webknox-text-processing.p.rapidapi.com/text/dates?text=${text}`,
            headers: {
                'X-RapidAPI-Host': XTextProcessingRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            json: true
        };
        const result = await request(options)
        res.jsonp(result);
    }
    catch (e) {
        internalServerError(res,e['statusCode'])
    }


});


router.post('/twilio/:accountSid/Calls.json', async (req, res) =>{
    try {
        const {accountSid}=req.params
        const {From,To,Url} =req.body
        const options = {
            uri: `https://twilio.p.rapidapi.com/${accountSid}/Calls.json`,
            headers: {
                'X-RapidAPI-Host': XTwilioRapidAPIHost,
                'X-RapidAPI-Key': XRapidAPIKey
            },
            method:'Post',
            body:{From,To,Url},
            json: true
        };
        const result = await request(options)
        res.jsonp(result);
    }
    catch (e) {

        internalServerError(res,e['statusCode'])
    }


});







module.exports = router;
