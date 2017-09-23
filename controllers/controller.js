var express = require('express');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const cors = require('cors');
// require ('dotenv/config');
var path = require('path');


// Initialize express router.
var router = express.Router();

// Import models.
var User = require('../models/User');

// router.get('*', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// router.use(cors());

// const authCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         //
//         jwksUri: process.env.JWKS_URI
//     }),
//     audience: process.env.AUDIENCE,
//     issuer: process.env.ISSUER,
//     algorithms: ['RS256']
// });



// router.get('/profile', authCheck, (req,res) => {
//     let CelebrityJokes = [
//     {
//       id: 88881,
//       joke: 'As President Roosevelt said: "We have nothing to fear but fear itself. And Chuck Norris."'
//     },
//     {
//       id: 88882,
//       joke: "Chuck Norris only let's Charlie Sheen think he is winning. Chuck won a long time ago."
//     },
//     {
//       id: 88883,
//       joke: 'Everything King Midas touches turnes to gold. Everything Chuck Norris touches turns up dead.'
//     },
//     {
//       id: 88884,
//       joke: 'Each time you rate this, Chuck Norris hits Obama with Charlie Sheen and says, "Who is winning now?!"'
//     },
//     {
//       id: 88885,
//       joke: "For Charlie Sheen winning is just wishful thinking. For Chuck Norris it's a way of life."
//     },
//     {
//       id: 88886,
//       joke: "Hellen Keller's favorite color is Chuck Norris."
//     }
//     ];
//     res.json(CelebrityJokes);
//   })

module.exports = router;