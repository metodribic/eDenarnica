var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.database;
ds.automigrate('user', function(err) {
  if (err) throw err;

  var accounts = [
    {
      email: 'admin@admin.com',
      firstname: 'admin',
      lastname: 'admin',
      username: "admin",
      balance: 5000,
      savings: 0,
      tags: [],
      password: 'admin',
      createdAt: new Date(),
      lastModifiedAt: new Date(),
      role: "admin"
    }
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.user.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});