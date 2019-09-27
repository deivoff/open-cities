module.exports = {
  async up(db) {
    await db.collection('cities').insertMany([
      {
        name: 'Тюмень',
        url: 'tmn',
        center: [57.1668968, 65.5152054],
        zoom: 12,
      },
      {
        name: 'Екатеринбург',
        url: 'ekb',
        center: [56.8381042, 60.6011887],
        zoom: 12,
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
