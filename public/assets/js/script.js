"use strict";

$(function() {
  $(".change-burger").on("click", function(event) {
    const id = $(this).data("id");
    const newBurger = $(this).data("newsleep");

    const newBurgerState = {
      burger: newBurger
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
      console.log("changed sleep to", newBurger);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      name: $("#bu")
        .val()
        .trim(),
      devour: $("[name=devour]:checked")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });
});
