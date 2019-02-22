let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log('get request bar');
    res.send('hello from bar <br/>' + new Date());
});

app.get('/asd', (req, res) => {
    res.send('bar asd');
});


app.listen('3002', () => {
    console.log('listening port 3002');
});