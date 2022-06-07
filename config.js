// Getting the config either from environment variable or pick the default
// npm install dotenv
const config = {
    PORT: process.env.PORT || '8000',
}

module.exports = config;