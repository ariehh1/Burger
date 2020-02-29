"use strict";

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    const id = $(this).data("id");
    const newBurger = $(this).data("newsleep");

    const newBurgerState = {
      burger: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
      console.log("changed sleep to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#bu")
        .val()
        .trim(),
      devour: $("[name=devour]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
