const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.get('/login', (req, res) => res.send('Login page'));
app.get('/register', (req, res) => res.send('Register page'));

app.listen(3000, () => console.log('App listening for connections'));