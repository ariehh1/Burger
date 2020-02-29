"use strict";

const orm = require("../config/orm.js");

const burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    const condition = "id= " + id;
    orm.update(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

module.exports = burgers;
