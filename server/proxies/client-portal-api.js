'use strict';

const proxyPath = '/client-portal-api';

module.exports = function (app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  let proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function (err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function (req, res) {
    // include root path in proxied request
    req.url = proxyPath + '/' + req.url;
    proxy.web(req, res, {
      target: 'https://johnny-appleseed.clientsecure.me',
      changeOrigin: true,
    });
  });
};
