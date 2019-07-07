const fs = require('fs').promises;

module.exports = {
  async up(db) {
    const data = await fs.readFile('./data.json');
    const dataJson = JSON.parse(data);
    return await db.collection('dots').insertMany(dataJson);
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db) {
    await db.collection('dots').deleteMany({ layer: 'buildings' });
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
