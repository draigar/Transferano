const http = require('http')
// const bodyParser = require('body-parser')
var express = require('express');
const app = express();
const socket = require('./socket');
var FormData = require('form-data');
// socket.io(app);
const reqres = require('./request');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', async (req, res) => {
    console.log(req.query);
  res.json({
    welcome: 'Welcome to Transferano, Now Get Out'
  })
})
app.get('/users', async (req, res) => {
    await reqres.post(res, 'users', { headers: 'Goood one' })
})

module.exports = app
