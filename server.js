const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/api')

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/exercise', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use((router));

app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});