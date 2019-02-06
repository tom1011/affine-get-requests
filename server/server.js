let quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let express = require('express');
let app = express();

console.log('server');

app.use(express.static('server/public'));

app.get('/quotes', function (req, res){
    res.send(quotes_data)
});

app.listen(5000, function() {
    console.log('Running on port 5000')
}); // this is listening for when someone gose on this port
