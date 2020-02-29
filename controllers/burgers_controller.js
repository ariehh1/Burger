"use strict";

const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");
router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.redirect("/");
    }
  );
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
