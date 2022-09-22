const express = require('express');

const app = express();

const port = 3000;

let bottles = 99;

app.get('/', (req, res) => {
        res.send(`${bottles} bottles of beer on the wall <br> <a href="/98">take one down, pass it around</a>`);
})

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles < 1) {
        res.send(`${req.params.number_of_bottles} bottles of beer on the wall <br> <a href="/">start over</a>`)
    } else if (req.params.number_of_bottles > 0) {
        res.send(`${req.params.number_of_bottles} bottles of beer on the wall <br> <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
    } 
})

app.listen(port, () => {
    console.log('listening on port', port);
});