// In this file you can configure migrate-mongo
const path = require('path');
require('dotenv').config({ path: path.join(__dirname + './../.env') });

const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@opeb-cities-ffxwj.mongodb.net/myos?retryWrites=true&w=majority`,

    // TODO Change this to your database name:
    databaseName: 'myos',

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    },
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: 'migrations',

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: 'changelog',
};

//Return the config as a promise
module.exports = config;
