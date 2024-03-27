const router = require("../routes/admin");
const products = [];
const path = require('path');
const rootDir = require('../util/path');




exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.PostAddProducts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }

//   module.exports = router;