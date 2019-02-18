const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const getdata = require('./api/getdata');
const getjsondata = require('./api/getjsondata');
const updatedata = require('./api/savejsondata');

app.use('/api/getdata', getdata);
app.use('/api/getjsondata', getjsondata);
app.use('/api/updatedata', updatedata);

app.listen(process.env.PORT || 3001);
