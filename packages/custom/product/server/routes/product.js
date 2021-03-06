'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Product, app, auth, database) {

  app.get('/product/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/product/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/product/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/product/example/render', function(req, res, next) {
    Product.render('index', {
      package: 'product'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
