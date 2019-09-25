module.exports = {
  async up(db) {
    await db.collection('users').insertOne({
      googleID: '109861306535320332521',
      name: { familyName: 'Мазуров', givenName: 'Евгений' },
      photos: [
        {
          url:
            'https://lh3.googleusercontent.com/a-/AAuE7mAhzCaAordSQ395NnbxxTW1entV7tIbMoeorIFO'
        }
      ],
      role: 'admin',
      __v: 0
    });
  },

  async down(db) {
    await db.collection('users').findOneAndDelete({
      googleID: '109861306535320332521'
    });
  }
};
