module.exports = {
  async up(db) {
    await db.collection('polygons').updateMany({}, { 
      $set: {
        'city': 'tmn',
        'layer': 'district',
      }
     });
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db) {
    await db.collection('polygons').updateMany({}, { 
      $unset: {
        'city': 'tmn',
        'layer': 'district',
      }
     });
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};