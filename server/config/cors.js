const cors = require('cors');

let allowedOrigins = ['http://localhost:3000', 'https://recipes-app-gold.vercel.app']
let corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = cors(corsOptions);