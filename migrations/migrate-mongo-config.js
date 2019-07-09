// In this file you can configure migrate-mongo
const path = require('path');
require('dotenv').config({ path: path.join(__dirname + './../.env') });

const config = {
  mongodb: {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@opeb-cities-ffxwj.mongodb.net/myos?retryWrites=true&w=majority`,

    databaseName: 'myos',

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    },
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
};

//Return the config as a promise
module.exports = config;
