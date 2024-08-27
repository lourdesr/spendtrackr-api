const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const createExpressServer = () => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));
    app.use('/api/v1', require('./router'));
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    return app;
};

module.exports = createExpressServer();