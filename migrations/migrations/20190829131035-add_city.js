module.exports = {
  async up(db) {
    await db.collection('cities').insertMany([
      {
        name: 'Тюмень',
        url: 'tmn'
      },
      {
        name: 'Екатеринбург',
        url: 'ekb'
      }
    ]);
  },

  async down(db) {
    await db.collection('cities').findOneAndDelete({
      name: 'Тюмень',
      url: 'tmn'
    });
    await db.collection('cities').findOneAndDelete({
      name: 'Екатеринбург',
      url: 'ekb'
    });
  }
};
