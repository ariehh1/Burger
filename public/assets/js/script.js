"use strict";

$(function() {
  $(".devour-it").on("click", function(event) {
    console.log("devour-it clicked");

    const burger_id = $(this).val();
    console.log("burger_id" + burger_id);

    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
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
