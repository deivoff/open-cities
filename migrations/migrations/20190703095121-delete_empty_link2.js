module.exports = {
  async up(db) {
    await db.collection('ekb_crime').updateMany({ 'properties.link2': null }, { $unset: { 'properties.link2': '' } });
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db) {
    await db.collection('ekb_crime').updateOne({ 'properties.link2': null }, { $set: { 'properties.links': [] } });
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
