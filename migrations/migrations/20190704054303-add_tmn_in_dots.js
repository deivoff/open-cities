module.exports = {
  async up(db) {
    await db
      .collection('tmn_crime')
      .find()
      .forEach(element => {
        delete element._id;
        element.layer = 'crime';
        element.city = 'tmn';
        const links = new Set();
        if (element.properties.link) {
          links.add(element.properties.link);
          delete element.properties.link;
        }
        for (let i = 0; i < 10; i++) {
          if (element.properties[`link${i}`]) {
            links.add(element.properties[`link${i}`]);
            delete element.properties[`link${i}`];
          }
        }

        element.properties.description = element.properties.summary;
        element.properties.ex_type = element.properties.type;
        delete element.properties.type;
        delete element.properties.summary;
        delete element.properties.city;
        element.properties.links = Array.from(links);
        db.collection('dots').insertOne(element);
      });

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