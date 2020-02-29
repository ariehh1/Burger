"use strict";

const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");
router.get("/", (req, res) => {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
