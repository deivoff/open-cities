module.exports = {
  async up(db) {
    await db.collection('dots').find({ layer: 'buildings' }).forEach((data) => {
      data.geometry.coordinates = deepStringToNumber(data.geometry.coordinates, true);
      db.collection('dots').save(data);
    });
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};

