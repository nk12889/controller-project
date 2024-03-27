const router = require("../routes/admin");
const products = [];
const path = require('path');
const rootDir = require('../util/path');


exports.getError = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'../', 'views', '404.html'));
}