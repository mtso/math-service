const express = require('express');
const mathService = require('./mathService');

const app = express();

function convertPathToNums(path) {
  return path.split('/').map((n) => +n);
}

app.use(function (request, response, next) {
  response.set('Access-Control-Allow-Origins', '*');
  next();
});

app.get('/sum/*', function (request, response) {
  const rest = request.url.replace(/^\/sum\//, '');
  const args = convertPathToNums(rest);
  
  response.send(200, mathService.sum.apply(null, args));
});

app.get('/difference/*', function (request, response) {
  const rest = request.url.replace(/^\/difference\//, '');
  const args = convertPathToNums(rest);
  
  response.send(200, mathService.difference.apply(null, args));
});

app.get('/product/*', function (request, response) {
  const rest = request.url.replace(/^\/product\//, '');
  const args = convertPathToNums(rest);
  
  response.send(200, mathService.product.apply(null, args));
});

app.get('/', function (request, response) {
  response.json([
    {
      path: '/sum',
      input: '[Number]',
      output: 'Number',
      description: 'Returns the sum of the URL parts (e.x.: /sum/1/2/3 => 6).',
    },
    {
      path: '/difference',
      input: '[Number]',
      output: 'Number',
      description: 'Returns the difference of the URL parts (e.x.: /difference/3/2/1 => 0).',
    },
    {
      path: '/product',
      input: '[Number]',
      output: 'Number',
      description: 'Returns the product of the URL parts (e.x.: /product/1/2/3 => 6).',
    },
  ]);
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + listener.address().port);
});
