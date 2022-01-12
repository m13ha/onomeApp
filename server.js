const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')

let port = process.env.PORT || 8080;


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));