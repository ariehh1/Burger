"use strict";

const connection = require("../config/connection.js");

const orm = {
  selectAll: function(tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// create new (insert) functions

// function for update in burger from false to true (default value)

module.exports = orm;
