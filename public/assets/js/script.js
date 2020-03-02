"use strict";

$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      // console.log("changed devour to", true);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var name = $("[name=burger-name]")
      .val()
      .trim();

    if (name !== "") {
      var newBurger = {
        name: name
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        // console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      $("[name=burger-name]").val("");
    }
  });
});
