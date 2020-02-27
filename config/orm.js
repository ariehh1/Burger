"use strict";

const connection = require("../config/connection.js");

// Do I need the following?
// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     };
//     console.log('connected as id ' + connection.threadId);
//   });

const orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
