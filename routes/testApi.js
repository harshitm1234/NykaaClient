var express = require("express");
const fs = require("fs");
var router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("products-dataset.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.status(202).json(JSON.parse(data));
  });
});

module.exports = router;
