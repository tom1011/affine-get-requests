let express = require('express');// this is where magic happens
let app = express();// 
let PORT = 5000

// express() vs express.something 
//express() is a function however in javascript
//express is also an object so 
//express.something is to run something as its an object
//express. is using a method ie a function built into it

let quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

console.log('server');

app.use(express.static('server/public'));


//req 
//res
app.get('/quotes', function (req, res){
    res.send(quotes_data)
})
//responds = res
//req = request

// app.listen(5000, function() {
//     console.log('Running on port 5000')
// }); // this is listening for when someone gose on this port 5000

// => arrowfucntion for of above function
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});

// .get only accepts get requests
// .use works on all requests.

// CRUD create, read/retrieve, update, delete.
// create = post, read = get, update = put, delete = delete
//today focuse on post and get.
 