// In this file you can configure migrate-mongo
const path = require('path');
require('dotenv').config({ path: path.join(`${__dirname}./../.env`) });

const config = {
  mongodb: {
    url: `${process.env.DB_URL}`,
    databaseName: `${process.env.DB_NAME}`,
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog'
};

// Return the config as a promise
module.exports = config;
