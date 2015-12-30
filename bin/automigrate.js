var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.database;
ds.automigrate('user', function(err) {
  if (err) throw err;

  var accounts = [
    {
      email: 'metod.ribic@gmail.com',
      firstname: 'Metod',
      lastname: 'Ribič',
      username: "metodribic",
      balance: 1000,
      savings: 250,
      tags: [],
      password: 'p4ssw0rd',
      createdAt: new Date(),
      lastModifiedAt: new Date()
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