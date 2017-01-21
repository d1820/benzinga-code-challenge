const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/stocks/:id', (req, res) => {
  http.get('http://data.benzinga.com/rest/richquoteDelayed?symbols=' + req.params.id, (resp) => {
    let body = '';
    resp.on('data', (chunk) => {
      body += chunk;
    });
    resp.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  }).on('error', (e) => {
    console.log('Got error: ' + e.message);
  });

});
