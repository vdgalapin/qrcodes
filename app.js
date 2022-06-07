// npm install express
const express = require('express');
const app = express();
const {spawn} = require('child_process');



// npm install ejs
const ejs = require('ejs');

// npm install dotenv
const config = require('./config');
const { response } = require('express');

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static('public'));

app.use('/public/images', express.static('images'))

const server = app.listen(config.PORT, ()=> {
    console.log('Listening on port ', config.PORT);
})

app.get('/', function(req, res) {
    // Render the first page
    res.render('pages/index');
})

// app.post('/readPython', (req, res)=> {
//     // Reading Python Files
//     var dataToSend;

//     // Spawn new child process to call the python script
//     const python = spawn('python3', ['public/python/qrcode_generator/qrcode_genlist.py']);
    
    
//     // Collect data from script
//     python.stdout.on('data', function(data) {
//         console.log('Pop data from python from script... ')
//         dataToSend = data.toString();
//     });


//     python.on('exit', (code) => {
//         console.log(`Child process close all studio with code ${code}`);
//         res.send(dataToSend);
//         console.log(dataToSend)
//     })
// });

module.exports = server