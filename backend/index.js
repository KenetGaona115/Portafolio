const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
//setings
app.listen(process.env.PORT || 3000, () => console.log('Listening'));
//app.use(express.static(path.join(__dirname, 'public/frontend/')))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/user', require('./routes/user_routes'))
//app.use('/someone', require('./routes/admin_routes'))

//middleware
app.use(express.urlencoded({ extended: false }));

//static
// app.use(express.static(path.join(__dirname, 'public')))
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'))
// })

module.exports = app;