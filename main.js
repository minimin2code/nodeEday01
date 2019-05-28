//load any required libraries/module
const express = require('express') // the name in '' is fixed. Variable/const name can be anything

//Declare tunables
const PORT = 3000; // can be any other number except 80

//create an express application
const app = express(); // create an instance of the express application

//Define routes. This will point to where index.html is
app.use(express.static(__dirname + '/public'))

//app.use(express.static(__dirname)) // this is another route

//Start the server; listen on port 3000
app.listen(PORT, function() {
    console.info(`Min Application started on port ${PORT} at ${new Date()}`);
    console.info(`dirname = ${__dirname}`)

});

