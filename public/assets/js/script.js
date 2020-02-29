"use strict";

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    const id = $(this).data("id");
    const newSleep = $(this).data("newsleep");

    const newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function() {
      console.log("changed sleep to", newSleep);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCat = {
      name: $("#ca")
        .val()
        .trim(),
      sleepy: $("[name=sleepy]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newCat
    }).then(function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
